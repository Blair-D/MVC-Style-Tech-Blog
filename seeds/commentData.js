const { Comment } = require("../models");

// seed data for comments
const commentData = [
  {
    comment_text: "I love this topic!",
    user_id: 3,
    post_id: 1,
  },
  {
    comment_text: "That is an interesting insight",
    user_id: 2,
    post_id: 3,
  },
  {
    comment_text: "Could you elabrate more on the subject please",
    user_id: 3,
    post_id: 2,
  },
  {
    comment_text: "Thank you for sharing",
    user_id: 1,
    post_id: 2,
  }
];

// function to seed comments
const commentSeed = () => Comment.bulkCreate(commentData);

module.exports = commentSeed;