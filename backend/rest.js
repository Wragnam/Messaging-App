const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var id;
users = [
  {
    Username: "Wragnam",
    Email: "wra@gmail.com",
    Password: "1234",
    Image: "ehgewhjlfh",
  },
  {
    Username: "Pieter",
    Email: "1s@gmail.com",
    Password: "12",
    Image: "dngkwernkl",
  },
  {
    Username: "Louis",
    Email: "testing@gmail.com",
    Password: "password",
    Image: "vdfmkvn;",
  },
];

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  next();
});

//List all users
app.use("/get-users", (req, res, next) => {
  res.json({ users: users });
});

//Create new user
app.post("/create-user", (req, res) => {
  users.push({
    Username: req.body.Username,
    Email: req.body.Email,
    Password: req.body.Password,
    Image: req.body.Image,
  });
  res.status(201).json({
    message: "User created successfully!",
  });
});

//Delete user
app.delete("/delete-user/:id", (req, res) => {
  id = req.params.id;
  var index = users.findIndex(specificUserIndex);
  users.splice(index, 1);
  res.status(201).json({
    message: 'Post Deleted'
  })
});

function specificUserIndex(user, username) {
  return (user.Username = id);
}
module.exports = app;
