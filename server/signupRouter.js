const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
// const DATA_IN_JSON = require("./users/userData.json");

// Sign up logic
router.post("/signup", (req, res) => {
  if (!fs.existsSync("./users/userData.json")) {
    fs.writeFileSync("./users/userData.json", "[]", "utf8");
  }
  try {
    fs.readFile(
      path.join(__dirname, "./users", "userData.json"),
      "utf-8",
      (err, data) => {
        if (data) {
          let USERS = JSON.parse(data); //into js array of objects
          const duplicateEmail = USERS.filter(
            (item) => item.email === req.body.email
          );

          //No duplications found
          if (duplicateEmail.length === 0) {
            USERS.push(req.body);
            fs.writeFile(
              path.join(__dirname, "./users", "userData.json"),
              JSON.stringify(USERS),
              () => {
                console.log("Data saved");
                res.statusMessage = "Registration Successful";
                res.status(200).end();
              }
            );
          } else {
            res.statusMessage = "User already exists ";
            res.status(209).end();
          }
        }
      }
    );
  } catch (err) {
    res.send(err);
  }
});

// Login logic
router.post("/login", (req, res) => {
  fs.readFile("./users/userData.json", "utf-8", (err, data) => {
    console.log("data", data);
    var users = JSON.parse(data);
    console.log(users);
    const filteredData = users.filter((item) => item.email === req.body.email);

    // if not found
    if (filteredData.length === 0) {
      res.statusMessage = "User dont exists";
      res.status(204).end();
    } else if (filteredData[0].password === req.body.password) {
      res.statusMessage = "Login Successful";
      res.status(200).end();
    } else {
      res.statusMessage = "Password is Wrong";
      res.status(401).end();
    }
  });
});

module.exports = router;
