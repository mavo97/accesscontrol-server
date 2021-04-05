const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema');
const resolvers = require('./resolver');
const db = require('./config/database');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
  context: { db },
});
server.applyMiddleware({ app });
db.authenticate();
db.sync();
app.listen({ port }, () =>
  console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`),
);
