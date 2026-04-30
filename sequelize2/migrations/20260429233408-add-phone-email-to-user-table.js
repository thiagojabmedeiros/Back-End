'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('users', 'email', {
      type: Sequelize.STRING,
      allowNull: true,
      default: 'name@email.com'
    })
    await queryInterface.addColumn('users', 'phone', {
      type: Sequelize.STRING,
      allowNull: true,
      default: '(DDD) 9 NNNN-NNNN'
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('users', 'email')
    await queryInterface.removeColumn('users', 'phone')
  }
};
