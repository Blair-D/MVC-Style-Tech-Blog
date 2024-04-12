const sequelize = require("../config/connection");
const { Model} = require("sequelize");
class Comment extends Model {}

// init comment model
Comment.init(
  {
    id: {
      // comment ID 
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    user_id: {
      // the user ID who created the comment
      type: DataTypes.INTEGER,
      references: {
        model: "user", 
        key: "id", 
      allowNull: false,  
      },
    },
    post_id: {
      // how to identify the post by ID
      type: DataTypes.INTEGER,
      references: {
        model: "post", 
        key: "id", 
      },
      allowNull: false,
    },
  },
);

module.exports = Comment;