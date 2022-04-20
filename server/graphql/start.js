// https://www.apollographql.com/blog/backend/using-express-with-graphql-server-node-js/
const apolloServer = require("./server");

const startGraphQLServer = async (app) => {
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
};

module.exports = startGraphQLServer;
