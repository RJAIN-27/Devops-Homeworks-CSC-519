const express = require("express");
const app = express();

const multer = require("multer");
const fs = require("fs");

// REDIS

var last_key = "key";
const redis = require("redis");
let client = redis.createClient(6379, "127.0.0.1", {});

///////////// GLOBAL HOOK

// Add hook to make it easier to get all visited URLS.
app.use(function (req, res, next) {
  console.log(req.method, req.url);
  if (req.url != "/recent") {
    client.lpush("array", req.url);
    client.ltrim("array", 0, 4);
  }
  next(); // Passing the request to the next handler in the stack.
});

///////////// WEB ROUTES

// responding to GET request to / route (http://IP:3000/)
app.get("/", function (req, res) {
  res.send("hello world");
});

app.get("/test", function (req, res) {
  res.writeHead(200, { "content-type": "text/html" });
  res.write("test");
  res.end();
});

// Task 1 ===========================================

var setFunction = function (req, res) {
  {
    var key = "key" + Math.random();
    client.set(key, "this message will self-destruct in 10 seconds");
    last_key = key;
    client.expire(key, 10);
    res.send("Key Set!");
  }
};

var getFunction = function (req, res) {
  client.get(last_key, function (err, value) {
    res.send(value);
  });
};

// ===================================================

// Task 2 ============================================

var recentFunction = function (req, res) {
  // console.log('Recived a request');
  var responseText = "";
  client.lrange("array", 0, 4, function (err, list) {
    res.send(list);
  });
};

// ===================================================

// Task 3 ============================================
const upload = multer({ dest: "./uploads/" });
app.post("/upload", upload.single("image"), function (req, res) {
  console.log(req.body); // form fields
  console.log(req.file); // form files

  if (req.file.fieldname === "image") {
    fs.readFile(req.file.path, function (err, data) {
      if (err) throw err;
      var img = new Buffer(data).toString("base64");
      console.log(img);

      client.lpush("cats", img, function (err) {
        res.status(204).end();
      });
    });
  }
});

app.get("/meow", function (req, res) {
  res.writeHead(200, { "content-type": "text/html" });

  // res.write("<h1>\n<img src='data:my_pic.jpg;base64," + imagedata + "'/>");
  res.end();
});
// ===================================================

// HTTP SERVER

app.get("/set", setFunction);
app.get("/get", getFunction);
app.get("/recent", recentFunction);

let server = app.listen(3003, function () {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Example app listening at http://${host}:${port}`);
});
