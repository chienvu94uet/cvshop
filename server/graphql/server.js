const { ApolloServer } = require("apollo-server-express");
const resolvers = require("./resolvers");
const typeDefs = require("./typeDefs");

const apolloServer = new ApolloServer({
  playground: true,
  typeDefs: typeDefs,
  resolvers: resolvers,
});

module.exports = apolloServer;
