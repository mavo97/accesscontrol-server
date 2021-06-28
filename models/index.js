const Sequelize = require('sequelize');
const db = require('../config/database');

const Service = db.define('service', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});

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
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
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
  serviceId: {
    type: Sequelize.INTEGER,
    references: {
        model: Service,
        key: 'id'
    }
  }
});

EntryLog.belongsTo(Service, {
  foreignKey: 'serviceId',
});


module.exports = {
  EntryLog,
  Service
};
