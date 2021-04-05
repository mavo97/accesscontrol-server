const EntryLog = require('../models');

const resolvers = {
  Query: {
    getAllEntries: async () => await EntryLog.findAll(),
  },
  Mutation: {
    async createEntyLog(root, { controlNumber, entryTime, career }, { db }) {
      try {
        let response = await EntryLog.create({
          controlNumber,
          entryTime,
          career,
        });
        return response;
      } catch (e) {
        return e.message;
      }
    },
  },
};

module.exports = resolvers;
