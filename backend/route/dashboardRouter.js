var express = require("express");
const { fullInfo, uploadpost, getAllPost, getUserPost } = require("../api/fetchAPI");
var router = express.Router();
var multer = require("multer");
var date_store;
// SET STORAGE
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, `${(date_store = Date.now())}-${file.originalname}`);
  },
});

var upload = multer({ storage: storage });

router.post("/getData", async (req, res) => {
  console.log("Fetching data of user!!");
  var user = req.body.username;

  let result = await fullInfo(user);
  res.send(result);
});

router.post("/uploadfile", upload.single("file"), async (req, res) => {
  if (!req.file) {
    const error = new Error("Please Upload a file");
    error.httpStatusCode = 400;
    return error;
  }

  console.log("Uploading File!!");
  // console.log(req.body);
  const data = {
    username: req.body.username,
    description: req.body.description,
    category: req.body.category,
    date: date_store,
    filename: `${date_store}-${req.file.originalname}`,
    path: "./uploads",
    like: [],
    comment: [],
  };

  let result = await uploadpost(data);
  res.send(result);
});

router.get("/getAllPost", async (req, res) => {
  try {
    let result = await getAllPost();
    res.send(result);
  } catch (e) {
    console.log(e);
    res.send(e);
  }
});

router.post("/getUserPost", async (req, res) => {
  try {
    let result = await getUserPost(req.body.username);
    res.send(result);
  } catch (e) {
    console.log(e);
    res.send(e);
  }
});

module.exports = router;
