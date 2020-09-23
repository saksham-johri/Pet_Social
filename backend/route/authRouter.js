var express = require("express");
var router = express.Router();
const { sing_In, sign_up } = require("../api/authAPI");

router.post("/sign_up", async (req, res) => {
  // console.log("hihi");
  var data = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    fname: req.body.fname,
    lname: req.body.lname,
  };

  var result = await sign_up(req.body.username, data);
  res.send(result);
});

router.post("/sign_in", async (req, res) => {
  console.log("In sign_in");
  var username = req.body.username;
  var password = req.body.password;

  let result = await sing_In(username, password);
  res.send(result);
});

module.exports = router;
