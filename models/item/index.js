var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ItemSchema = new Schema({
  title: String,
});

var ItemModel = mongoose.model("Item", ItemSchema);



module.exports = ItemModel;
