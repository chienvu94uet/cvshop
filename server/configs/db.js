const mongoose = require("mongoose");
const { MONGO_URI } = require("./env");

const connectMongoDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connect MongoDB Success");
  } catch (error) {
    console.log(`Connect MongoDB Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectMongoDB;
