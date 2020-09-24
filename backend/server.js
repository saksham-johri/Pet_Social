const PORT = 8081;

var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cors = require("cors");

var authRouter = require("./route/authRouter");
var dashboardRouter = require("./route/dashboardRouter");

var app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/dbname", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.use("/auth", authRouter);

app.use("/dashboard", dashboardRouter);

app.listen(PORT, () => {
  console.log(`Connected to Server on PORT: ${PORT}`);
});
