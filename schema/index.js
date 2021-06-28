const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type EntryLog {
    id: Int!
    controlNumber: Int!
    entryTime: String!
    career: String!
    name: String!
    lastName: String!
    serviceId: Int!
  }

  type Service {
    id: Int!
    name: String!
  }

  type Query {
    getAllEntries: [EntryLog!]!
    getServices: [Service!]!
    getEntriesByDate(career: String!, dates: [String!]!): [EntryLog!]!
  }

  type Mutation {
    createEntryLog(
      controlNumber: Int!
      entryTime: String!
      career: String!
      name: String!
      lastName: String!
      serviceId: Int!
    ): EntryLog!
    deleteEntryLog(controlNumber: Int!): Int!
    createService(name: String!): Service!
    deleteService(id: Int!): Int!
  }
`;
module.exports = typeDefs;
