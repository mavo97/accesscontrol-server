const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type EntryLog {
    id: Int!
    controlNumber: Int!
    entryTime: String!
    career: String!
    name: String!
    lastName: String!
  }

  type Query {
    getAllEntries: [EntryLog!]!
    getEntriesByDate(career: String!, dates: [String!]!): [EntryLog!]!
  }

  type Mutation {
    createEntryLog(
      controlNumber: Int!
      entryTime: String!
      career: String!
      name: String!
      lastName: String!
    ): EntryLog!
    deleteEntryLog(controlNumber: Int!): Int!
  }
`;
module.exports = typeDefs;
