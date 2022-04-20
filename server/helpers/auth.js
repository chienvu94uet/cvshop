const jwt = require("jsonwebtoken");
const checkAuth = (req) => {
  if (!req.headers.authorization) return null;
  const token = req.heaer.authorization.split(" ")[1];
  return jwt.decode(token) ?? "";
};

module.exports = checkAuth;
