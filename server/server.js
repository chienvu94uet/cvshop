const express = require("express");
const bodyParser = require("body-parser");
const {
  env: { PORT },
  db: connectMongoDB,
} = require("./configs");
const { cors } = require("./middlewares");
const startGraphQLServer = require("./graphql/start");

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors);

connectMongoDB();
startGraphQLServer(app);

app.listen(PORT, () => console.log(`🚀 Server is running on port: ${PORT}`));
