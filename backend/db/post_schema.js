var mongoose = require("mongoose");

var PostSchema = mongoose.Schema({
  filename: String,
  path: String,
  username: String,
  date: Date.now(),
  like: Array,
  comment: Array,
});
