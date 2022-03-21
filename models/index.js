'use strict';

const Sequelize = require('sequelize');
const config = require('../config/config')
let sequelize;
sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: 'mysql',
  define: {
    timestamps: false,
  },
  logging: false,
},
  
)
sequelize
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch((err) => {
            console.log('Unable to connect to the database:', err);
        });

module.exports = sequelize;
global.sequelize = sequelize;

