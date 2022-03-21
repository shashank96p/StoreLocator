const express = require('express');
const multer=require('multer');
const path = require('path');
const app = express()
app.use(express.json({limit:`50mb`}))
app.use(express.urlencoded({limit:`50mb`,extended:true}))
require('./config/mongo')
app.use('/upload',express.static(path.join(__dirname,'upload')))
app.set("view engine", "ejs")
app.get("/",(req,res)=>{
    res.render('login')
})
app.get("/addStore",(req,res)=>{
    res.render('store')
})
require("./routes")(app)
app.listen(8000,()=>console.log('Listing On Port 8000'))