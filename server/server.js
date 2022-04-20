const express = require("express");
const bodyParser = require("body-parser");
const { config, db } = require("./configs");
const startGraphQLServer = require("./graphql/start");

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PATCH"
  );
  next();
});

db.connectMongoDB();
startGraphQLServer(app);

app.listen(config.PORT, () =>
  console.log(`🚀 Server is running on port: ${config.PORT}`)
);
