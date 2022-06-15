// const mongoose = require('mongoose');
//
// const uri = "mongodb://0.0.0.0:27017/todolistDB";
//
// mongoose.connect(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });
//
// const itemSchema = new mongoose.Schema({
//   name: String
// });
//
// const Item = mongoose.model("Item", itemSchema);
//
//
// //checks if there are itemSchema
// exports.checkForDefaults = function() {
//   Item.find({}, function(err, foundItems) {
//     if (err) {
//       console.log(err);
//     } else {
//       if (foundItems.length == 0) {
//         createDefaults();
//       }
//     }
//   });
// }
//
// //create default values for db
// function createDefaults() {
//   let defaultValues = [{
//     name: "Create"
//   }, {
//     name: "Your"
//   }, {
//     name: "toDolist"
//   }];
//   Item.insertMany(defaultValues, function(err) {
//     if (err) {
//       console.log(err + " createDefaults");
//     }
//   });
// }
//
// //show list and return to user using promises
// exports.showList2 = function() {
//   return new Promise((resolve, reject) => {
//     Item.find({}, function(err, foundItems) {
//       if (err) {
//         reject(err + " showList");
//       } else {
//         resolve(foundItems);
//       }
//     });
//
//   });
// }
//
//
// exports.insertItem = function(item) {
//   const newItem = new Item({
//     name: item
//   });
//   newItem.save(function(err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("insert one");
//     }
//   });
// }
