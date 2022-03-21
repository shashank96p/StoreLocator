'use strict';
const bcrypt = require("bcrypt");
const saltRounds = 10;
module.exports = {
  up: async queryInterface => {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'John',
      lastName: 'smith',
      username: 'smith123',
      password:  await bcrypt.hash('1234', saltRounds),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'John',
      lastName: 'Doe',
      username: 'doe123',
      password: await bcrypt.hash('1234', saltRounds),
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
    
  },

  down: async queryInterface => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
