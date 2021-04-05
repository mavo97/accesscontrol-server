const EntryLog = require('../models/entryLog');

const resolvers = {
  Query: {
    getAllEntries: async () => await EntryLog.findAll(),
  },
  Mutation: {
    async createEntyLog(root, { controlNumber, entryTime, career }, { db }) {
      return EntryLog.create({
        controlNumber,
        entryTime,
        career,
      });
    },
  },
};

module.exports = resolvers;
