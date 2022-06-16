const express = require("express");
const _ =require('lodash');
const processDate = require("../public/scripts/date.js");
const mySchema = require("../models/toDoList");
const Listpost = mySchema.model;
const Itempost = mySchema.modelItem;
const router = express.Router();

//defults
const grocery = new Itempost({
  name: "Go to the grocery"
});
const cook = new Itempost({
  name: "Cook breakfast"
});
const eat = new Itempost({
  name: "Eat breakfast"
});

const itemsDefault = [grocery, cook, eat];


router.get("/", async (req, res)=>{
  res.redirect("/home");
});

router.get("/:todoWhere", async (req,res) =>{
  const title = _.lowerCase(req.params.todoWhere);
  try{
    const posts = await Listpost.findOne({name:title});// find if theres existing data
    if(!posts){
      const newList = new Listpost({
           name: _.lowerCase(title),
           list: itemsDefault //send list of array
      });
      newList.save();
      res.redirect("/"+ _.lowerCase(title));
    }else{
      //list[0].name
      res.render("list.ejs",{ titleThe: _.upperCase(title) , currentDate:processDate.currentDate(), toDoItems: posts.list, routeOfCall:title });
    }
  }catch(err){
      res.send("Somethins wrong " + err);
  }

});



//insertone file to data base
router.post("/:todoWhere", async function(req,res){
  let title = _.lowerCase(req.params.todoWhere);
  let post = req.body.newItem;
  const newName = new Itempost({
    name: post
  });
  try{
    const checkPost = await Listpost.findOne({name:title});
    checkPost.list.push(newName);
    checkPost.save();
  }catch(err){
    res.json({message:err});
  }
  res.redirect("/"+title);

    // long method
    // newList.save(function(err){
    //   if(err){
    //     console.log("error");
    //   }
    //   else{
    //     res.redirect("/");
    //   }
    // });
});
//delete delete
router.post("/:todohere/delete", async (req,res)=>{
  const checkboxId = req.body.checkbox;
  const listName = req.body.listName;
  try{
    const deleteItem = await Listpost.findOneAndUpdate({name: listName}, {$pull: {list: {_id: checkboxId}} });
    res.redirect("/"+req.params.todohere);
  }catch(err){
    res.json(err);
  }


});

module.exports = router;
