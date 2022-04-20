const express = require("express");
const { config, db } = require("./configs");
const startGraphQLServer = require("./graphql/start");

const app = express();
app.use(express.json());

db.connectMongoDB();
startGraphQLServer(app);

app.listen(config.PORT, () =>
  console.log(`🚀 Server is running on port: ${config.PORT}`)
);
