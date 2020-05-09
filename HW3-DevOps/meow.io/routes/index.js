var express = require("express");
var router = express.Router();

// Redis
var last_key = "key";
const redis = require("redis");
let client = redis.createClient(6379, "127.0.0.1", {});

const db = require("../data/db");
var array = "arr";

router.get("/", async function (req, res, next) {
  console.log("hello");
  await client.get(array, async function (err, facts) {
    await client.lrange("photo", 0, -1, async function (error, images) {
      const uploads = images || (await db.recentCats(5));
      if (facts != null) {
        console.log("I am from the CACHE");
        res.render("index", {
          title: "meow.io",
          recentUploads: uploads,
          bestFacts: JSON.parse(facts),
        });
      } else {
        console.log("I am from DATABASE");
        const a = (await db.votes()).slice(0, 100);
        await client.set(array, JSON.stringify(a));
        await client.expire(array, 10);
        res.render("index", {
          title: "meow.io",
          recentUploads: uploads,
          bestFacts: a,
        });
      }
    });
  });
});

module.exports = router;

// var express = require("express");
// var router = express.Router();

// const db = require("../data/db");

// /* GET home page. */
// router.get("/", async function (req, res, next) {
//   res.render("index", {
//     title: "meow.io",
//     recentUploads: await db.recentCats(5),
//     bestFacts: (await db.votes()).slice(0, 100),
//   });
// });

// module.exports = router;
