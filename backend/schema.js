var mongoose = require("mongoose");
var userSchema = mongoose.Schema({
  username: { type: String },
  password: { type: String },
  email: { type: String },
  fname: { type: String },
  lname: { type: String },
});
module.exports = mongoose.model("collectionname", userSchema);
