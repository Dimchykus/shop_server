var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var ItemModel = require("./models/item");

const conStr =
  "mongodb+srv://Dima:Dima123123@cluster0.hmfva.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose
  .connect(conStr, (err)=>{
    if(err) throw err;
    console.log('Connected')
  });

var app = express();
app.use(express.json());

var router = express.Router();

router.get("/", (req, res, next) => {
  ItemModel.find({}, function (err, items) {
    if (err) res.send("error");
    res.send(items);
  });
});

const PORT = process.env.PORT || 4000;

var awesome_instance = new ItemModel({ title: "awesome" });

// Save the new model instance, passing a callback
awesome_instance.save(function (err) {
  if (err) return console.log(err);
  console.log("saved");
});

app.use(router);

app.listen(PORT, () => {
  console.log(`Listening ${PORT}`);
});
