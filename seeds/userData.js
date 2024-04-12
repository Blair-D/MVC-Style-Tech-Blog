 // importing user model 
const { User } = require("../models");

// user data
const userData = [
  {
    username: "John D",
    email: "JohnD@test.com",
    password: "passwordJD",
  },
  {
    username: "Jane A",
    email: "JaneA@test.com",
    password: "passwordJA",
  },
  {
    username: "Jack W",
    email: "JackW3@test.com",
    password: "passwordJW",
  },
];

// seed users using bulkcreate
const userSeed = () => User.bulkCreate(userData);

// exporting userSeed
module.exports = userSeed;