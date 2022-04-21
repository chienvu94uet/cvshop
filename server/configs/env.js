require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 1911,
  MONGO_URI: process.env.MONGO_URI || "",
};
