const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Example {
    message: String
  }

  type Query {
    queryExample: Example
  }

  type Mutation {
    mutationExample: Example
  }
`;

module.exports = typeDefs;
