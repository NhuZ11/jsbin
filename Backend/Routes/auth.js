const express = require('express');
const User = require('../Model/UserModel');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { body, validationResult } = require('express-validator');
const authenticateUser = require("../Middleware/authenticateUser");

const JWT_SECRET = process.env.SECRET;

router.post(
    "/register",
    [
      body("username").isLength({ min: 3 }),             //validation 
      body("email").isEmail(),
      body("password").isLength({ min: 5 }),
    ],
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      try {
       //create user object - create entry in db
        let user = await User.findOne({ email: req.body.email });                          
        if (user) {
          return res.status(400).json({ error: "email already exists." });
        }
  
        //encryption from npm bcrypt file
        const salt = await bcrypt.genSalt(10);
        const securePass = await bcrypt.hash(req.body.password, salt);
        user = await User.create({
          username: req.body.username,
          email: req.body.email,
          password: securePass,
        });
  
        const data = {
          user: {
            id: user.id,
          },
        };
        const authToken = jwt.sign(data, JWT_SECRET);
        console.log(authToken);
        res.json({ user, authToken });
      } catch (error) {
        res.status(500).send("Internal server error");
      }
    }
  );



  
//login user with using post "api/auth/login"
router.post("/login", [
    
    body('email').isEmail(),
    body('password').isLength({ min: 8 })],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
  
  
        const {email, password} = req.body
        try{
            let user = await User.findOne({email})
            if(!user){
                return res.status(400).json({errors: "Invalid Credentials."})
            }
            const passwordCompare = await bcrypt.compare(password, user.password)
            if(!passwordCompare){
                return res.status(400).json({errors: "Invalid Credentials."})
            }
            const data = {
                user:{
                    id: user.id
                }
            }    
            const authToken = jwt.sign(data,JWT_SECRET)
            console.log(authToken)
            res.json({user, authToken})
  
        }catch(error){
            console.error(error.message);
            res.status(500).send("Internal server error")
        }
    }
  )


  router.get("/getuser", authenticateUser, async (req, res) => {
    try {
      const users = await User.findById(req.user.id);
      res.json(users);
    } catch (err) {
      console.log(err);
      res.status(500).send("Internal server error")
    }
  });


module.exports = router;
