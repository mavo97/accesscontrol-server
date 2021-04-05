const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const typeDefs = require('./schema/entryLog-schema');
const resolvers = require('./resolver/resolver');
const db = require('./config/database');

const app = express();
const port = 4000;

const server = new ApolloServer({ typeDefs, resolvers, context: { db } });
server.applyMiddleware({ app });
db.authenticate();
db.sync();
app.listen({ port }, () =>
  console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`),
);
