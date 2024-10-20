require('dotenv').config()
const axios =  require('axios')
const express = require('express')
const path = require('path')
const app = express()


app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname+"" ))
})

app.listen(3000)