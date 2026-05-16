'use strict';

const { sequelize } = require('../models/User');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('addresses', 'createdAt', {
      type: Sequelize.DATE,
      allowNull: false
    })
    await queryInterface.addColumn('addresses', 'updatedAt', {
      type: Sequelize.DATE,
      allowNull: false
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('addresses', 'createdAt')
    await queryInterface.removeColumn('addresses', 'updatedAt')
  }
};
