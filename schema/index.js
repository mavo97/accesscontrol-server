const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type EntyLog {
    id: Int!
    controlNumber: Int!
    entryTime: String!
    career: String!
  }

  type Query {
    getAllEntries: [EntyLog!]!
  }

  type Mutation {
    createEntyLog(controlNumber: Int!, entryTime: String!, career: String!): EntyLog!
  }
`;
module.exports = typeDefs;
