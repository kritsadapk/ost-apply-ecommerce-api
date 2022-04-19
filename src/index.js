const express = require("express");
const app = express();
const fs = require("fs");
const JsonDB = require("node-json-db").JsonDB;
const Config = require("node-json-db/dist/lib/JsonDBConfig").Config;
const bodyParser = require("body-parser");
const cors = require("cors");

const jsonFileName = "list.json";
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(cors());
app.use(express.json());

var server = app.listen(process.env.PORT || 3000, function () {
  const host = server.address().address;
  const port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});

// console.log(__dirname + "/" + jsonFileName);
app.get("/products", function (req, res) {
  fs.readFile(__dirname + "/" + jsonFileName, "utf8", function (err, data) {
    var pd = JSON.parse(data).products;
    var pflength = pd.length;
    const arr = [];
    for (let i = 0; i < pflength; i++) {
      arr.push({
        id: pd[i].id,
        name: pd[i].name,
        imageUrl: pd[i].imageUrl,
        price: pd[i].price,
        stock: pd[i].stock,
      });
    }
    return res.json(arr).status(200);
  });
});

app.get("/me", function (req, res) {
  fs.readFile(__dirname + "/" + jsonFileName, "utf8", function (err, data) {
    var db = new JsonDB(new Config(jsonFileName, true, false, "/"));
    var me = db.getData("/userLogin");
    return res.json(me).status(200);
  });
});

app.put("/me", urlencodedParser, function (req, res) {
  var db = new JsonDB(new Config(jsonFileName, true, false, "/"));

  var cloneUserLogin = db.getData("/userLogin");
  db.push(
    "/userLogin",
    Object.assign(cloneUserLogin, {
      fistName: req.body.fistName,
      lastName: req.body.lastName,
    })
  );
  const userLogin = db.getData("/userLogin");
  return res.json(userLogin).status(200);
});

app.get("/products/:id", function (req, res) {
  const id = req.params.id;
  fs.readFile(__dirname + "/" + jsonFileName, "utf8", function (err, data) {
    const pd = JSON.parse(data).products;
    const productFilter = pd.filter((prod) => {
      return prod.id == id;
    });
    if (productFilter.length) {
      return res.json(productFilter[0]).status(200);
    } else {
      return res.end("null").status(200);
    }
  });
});

// app.use(express.static("public"));
app.get("/index.html", function (req, res) {
  res.sendFile(__dirname + "/" + "index.html");
});
