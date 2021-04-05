const Sequelize = require('sequelize');
const db = require('../config/database');

const EntryLog = db.define('entryLog', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  controlNumber: {
    type: Sequelize.BIGINT(8),
    allowNull: false,
  },
  entryTime: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  career: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = EntryLog;
