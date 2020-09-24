const PORT = 8081;

var express = require("express");
var app = express();

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/dbname", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var cors = require("cors");

var authRouter = require("./route/authRouter");
var dashboardRouter = require("./route/dashboardRouter");


var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.use("/auth", authRouter);

app.use("/dashboard", dashboardRouter);

// app.post("/uploadfile", upload.single("file"), (req, res) => {
//   if (!req.file) {
//     const error = new Error("Please upload a file");
//     error.httpStatusCode = 400;
//     return next(error);
//   }

//   console.log("Uploading File");

//   const data = {
//     username: req.body.username,
//     date: Date.now(),
//     filename: `${Date.now()}-${req.file.originalname}`,
//     path: "./uploads",
//     like: [],
//     comment: [],
//   };

//   console.log("Data", data);

//   postdb.create(data, (err, result) => {
//     if (err) {
//       res.send(err);
//     } else {
//       // console.log("Result", result);
//       res.send("File Uploaded");
//     }
//     console.log("File Uploaded Successfully!!");
//   });
// });

app.listen(PORT, () => {
  console.log(`Connected to Server on PORT: ${PORT}`);
});
