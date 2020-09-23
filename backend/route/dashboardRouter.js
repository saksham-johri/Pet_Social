var express = require("express");
const { fullInfo } = require("../api/fetchAPI");
var router = express.Router();

router.post("/getData", async (req, res) => {
  console.log("Fetching data of user!!");
  var user = req.body.userName;

  let result = await fullInfo(user);
  res.send(result);
});

module.exports = router;
