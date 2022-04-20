const express = require("express");
const { config, db } = require("./configs");

const app = express();
app.use(express.static("public"));
app.use(express.json());

db.connectMongoDB();
app.listen(config.PORT, () =>
  console.log(`Server is running on port: ${config.PORT}`)
);
