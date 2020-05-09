var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const db = require("./data/db");
const redis = require("redis");
const client = redis.createClient(6379, "127.0.0.1", {});

var indexRouter = require("./routes/index");
var uploadRouter = require("./routes/upload");
var factRouter = require("./routes/fact");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/upload", uploadRouter);
app.use("/fact", factRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  console.log("hello");
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  //sent the images from the list to database at set intervals
  //setInterval(function(){console.log("twilight");} ,10)
  // render the error page
  res.status(err.status || 100);
  res.render("error");
});

setInterval(function r2d() {
  //console.log("hello");
  client.lpop("for_db_image", async function (error, image) {
    if (image) {
      console.log("Image saved to DB");
      await db.cat(image);
    }
  });
}, 100);

module.exports = app;
