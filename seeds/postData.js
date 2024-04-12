const { Post } = require("../models");

// data for seeding posts
const postData = [
  {
    title: "MVC Love it or Hate it?",
    content: "likes and dislikes of MVC",
    user_id: 1,
  },
  {
    title: "Coding short cuts!",
    content: "List your short-cuts and share knowledge",
    user_id: 2,
  },
  {
    title: "I mustache { you a question?",
    content: "Everything Handle Bars",
    user_id: 3,
  }
];


const postSeed = () => Post.bulkCreate(postData);
module.exports = postSeed;