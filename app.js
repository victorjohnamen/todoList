const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');


const processDate = require(__dirname+"/date.js")
const server = require(__dirname+"/server.js")


const uri = "mongodb://0.0.0.0:27017/todolistDB";
const homeRoute = require("./routes/home");

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static("public"));

const port = process.env.PORT || 3000;

//import routes
app.use("/", homeRoute);


//connect to db
mongoose.connect(uri, {useNewUrlParser: true,useUnifiedTopology: true}, ()=>{
  console.log("connected to db");
});
//connect to port
app.listen(port, ()=>{
  console.log("App is listening to the port");
})
