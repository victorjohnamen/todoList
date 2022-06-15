const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
  name: {
    type:String,
    required: true
  }
});
const listSchema = mongoose.Schema({
  name: {type:String,required:true},
  list: [itemSchema]
});

module.exports = {
  schema: listSchema,
  model:mongoose.model("List",listSchema),
  modelItem: mongoose.model("Item",itemSchema)
}
