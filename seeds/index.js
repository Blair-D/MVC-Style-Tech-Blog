 // import seed data
const userSeed = require("./userData");
const postSeed = require("./postData");
const commentSeed = require("./commentData");

// sequelize connection imported
const sequelize = require("../config/connection");

// function to seed all data 
const dataSeed = async () => {
  try {
    await sequelize.sync
    ({ force: true });
    // call seed functions individually
    await userSeed();
    await postSeed();
    await commentSeed();

    console.log("Successfully seeded DB");
  } catch (error) {
    console.error("ERROR! Database not seeded", error);
  }
  process.exit(0);
};
dataSeed();