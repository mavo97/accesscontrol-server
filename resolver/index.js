const { EntryLog, Service } = require('../models');
const { Op } = require('sequelize');

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
    getServices: async () => {
      try {
        const response = await Service.findAll();
        return response;
      } catch (e) {
        return e.message;
      }
    },
    getEntriesByDate: async (root, { dates, career }) => {
      try {
        const datesMap = dates.map((date) => new Date(date).getTime());

        const newDates = datesMap.sort(function (a, b) {
          return new Date(b) - new Date(a);
        });
        // console.log(newDates);
        const response = await EntryLog.findAll({
          where: {
            career: career,
            createdAt: {
              [Op.between]: [newDates[1], newDates[0]],
            },
          },
        });
        console.log(response, 'RESPONSE');
        return response;
      } catch (e) {
        console.log(e);
        return e.message;
      }
    },
  },
  Mutation: {
    async createEntryLog(root, { controlNumber, entryTime, career, name, lastName, serviceId }, { db }) {
      try {
        let response = await EntryLog.create({
          controlNumber,
          entryTime,
          career,
          name,
          lastName,
          serviceId,
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
    async createService(root, { name }, { db }) {
      try {
        let response = await Service.create({ name });
        return response;
      } catch (e) {
        console.log(e);
        return e.message;
      }
    },
    async deleteService(root, { id }, { db }) {
      try {
        let response = await Service.destroy({
          where: {
            id: id,
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
