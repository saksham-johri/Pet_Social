const PORT = 8081;

var express = require("express");
var app = express();

var mongoose = require("mongoose");
var userdb = require("./schema");
var cors = require("cors");
var multer = require("multer");

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/dbname", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post("/sign_up", (req, res) => {
  // console.log("req.body", req.body);
  var username = req.body.username;
  var email = req.body.email;
  var password = req.body.password;
  var fname = req.body.fname;
  var lname = req.body.lname;

  var data = {
    userName: username,
    email: email,
    password: password,
    fname: fname,
    lname: lname,
  };

  userdb.find({ username: username }, (err, result) => {
    if (result.length > 0) {
      res.send("Username Already Exist");
    } else {
      userdb.create(req.body, function (err, result) {
        if (err) {
          res.send(err);
        } else {
          res.send(result);
        }
      });
    }
  });
});

app.post("/sign_in", (req, res) => {
  var username = req.body.username;
  var password = req.body.password;

  userdb.find({ username: username, password: password }, (err, result) => {
    if (result.length > 0) {
      res.send("Logged In Successfully!");
    } else {
      res.send("Username / Password Incorrect!");
    }
  });
});

// SET STORAGE
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
var upload = multer({ storage: storage });

app.post("/uploadfile", upload.single("file"), (req, res, next) => {
  console.log("In server post call");
  const file = req.file;
  if (!file) {
    const error = new Error("Please upload a file");
    error.httpStatusCode = 400;
    return next(error);
  }
  res.send(file);
  console.log("req.file ", req.file);
});

app.listen(PORT, () => {
  console.log(`Connected to Server on PORT: ${PORT}`);
});
