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
    async createEntryLog(root, { controlNumber, entryTime, career, name, lastName }, { db }) {
      try {
        let response = await EntryLog.create({
          controlNumber,
          entryTime,
          career,
          name,
          lastName,
        });
        return response;
      } catch (e) {
        console.log(e);
        return e.message;
      }
    },
    async deleteEntryLog(root, { controlNumber }, { db }) {
      try {
        let response = await EntryLog.destroy({
          where: {
            controlNumber: controlNumber,
          },
        });
        return response;
      } catch (error) {
        return error.message;
      }
    },
  },
};

module.exports = resolvers;
