const express = require("express");
const app=express();
const cors=require("cors");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8080;

// Config env variables
require("dotenv").config();

//Config DB
require("./config/db.config") 

//CORS 
app.use(cors());

//Body-parser
app.use(bodyParser.json())
//Load Routes
require("./routes/user.route")(app);
app.listen(PORT,()=>{
    console.log('App is listening at ',PORT )
})