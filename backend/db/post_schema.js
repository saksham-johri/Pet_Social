var mongoose = require("mongoose");

var postSchema = mongoose.Schema({
  username: { type: String },
  date: { type: Date },
  filename: { type: String },
  description: { type: String },
  category: { type: String },
  path: { type: String },
  like: { type: Array },
  comment: { type: Array },
});

module.exports = mongoose.model("post", postSchema);
