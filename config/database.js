const Sequelize = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  port: 5432,
  dialect: 'postgres',
  ssl: {
    rejectUnauthorized: false, // <<<<<<< YOU NEED THIS
  },
});

// async function testConnection() {
//   try {
//     await db.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// }

module.exports = db;
