const config = require("config");

module.exports = {
  PORT: config.get("PORT"),
  MONGO_URI: config.get("MONGO_URI"),
};
