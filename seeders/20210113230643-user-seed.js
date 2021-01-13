'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('users_session26s', [{
      user: 'tata',
      password: '12345678',
      user_id: "987654321",
      age:"27",
      address:'jogja',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      user: 'dona',
      password: 'juventus',
      user_id:'123498765',
      age:"17",
      address:'palembang',
      createdAt: new Date(),
      updatedAt: new Date(),  
    }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
