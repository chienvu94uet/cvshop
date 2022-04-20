const resolvers = {
  Query: {
    queryExample: (parent, args, context) => {
      return {
        message: "This is the message from the query resolver.",
      };
    },
  },
  Mutation: {
    mutationExample: (parent, args, context) => {
      console.log("Perform mutation here before responding.");

      return {
        message: "This is the message from the mutation resolver.",
      };
    },
  },
};

module.exports = resolvers;
