const db = require("../config/connection");
const { User, Pet } = require("../models");

const petSeeds = require("./petSeeds.json");
const userSeeds = require("./userSeeds.json");
db.once("open", async () => {
  try {
    await Pet.deleteMany({});
    await Pet.insertMany(petSeeds);

    await User.deleteMany({});
    await User.insertMany(userSeeds);

    console.log("Data seeded!");
    process.exit(0);
  } catch (error) {
    throw error;
  }
});
