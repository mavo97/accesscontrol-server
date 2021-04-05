const EntryLog = require('../models');

const resolvers = {
  Query: {
    getAllEntries: async () => {
      try {
        const response = await EntryLog.findAll();
        return response;
      } catch (e) {
        return e.message;
      }
    },
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
