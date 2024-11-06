require('dotenv').config()
const axios =  require('axios')
const express = require('express')
const path = require('path')
const app = express()
const dbConnect = require('./db')
dbConnect()
const port = 3000
app.use(express.json());
const cors = require('cors');
app.use(cors());


app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname+"" ))
})


app.listen(port, () => {
    console.log(`API is listening to port: ${port}`)
})


app.use('/api/auth', require('./Routes/auth'))