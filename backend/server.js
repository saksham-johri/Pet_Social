const PORT = 8081;

var express = require("express");
var app = express();

var mongoose = require("mongoose");
var cors = require("cors");
var multer = require("multer");

var authRouter = require("./route/authRouter");
var dashboardRouter = require("./route/dashboardRouter");

var userdb = require("./db/user_schema");

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/dbname", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// SET STORAGE
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
var upload = multer({ storage: storage });

app.use("/auth", authRouter);

app.use("/dashboard", dashboardRouter);

app.post("/uploadfile", upload.single("file"), (req, res) => {
  console.log("Uploading File");
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
