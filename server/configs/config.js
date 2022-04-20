const config = require("config");

module.exports = {
  MONGO_URI: config.get("MONGO_URI"),
  PORT: config.get("PORT"),
};
