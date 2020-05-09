const multer = require("multer");
const fs = require("fs");

const db = require("../data/db");
const redis = require("redis");
const client = redis.createClient(6379, "127.0.0.1", {});

var express = require("express");
var router = express.Router();

/* GET users listing. */
const upload = multer({ dest: "./uploads/" });

router.post("/", upload.single("image"), function (req, res) {
  //console.log(req.body) // form fields
  //console.log(req.file) // form files

  if (req.file.fieldname === "image") {
    fs.readFile(req.file.path, async function (err, data) {
      if (err) throw err;
      var img = new Buffer(data).toString("base64");
      client.rpush("for_db_image", img);
      console.log(
        "Storing the image to be sent to the database and not overwelhm the database"
      );
      client.lpush("photo", img, async function (error, rep) {
        console.log("5 recent images getting stored to the cache");
        client.ltrim("photo", 0, 4);
      });
      //await db.cat(img);
      res.send("Ok");
    });
  }
});

module.exports = router;
