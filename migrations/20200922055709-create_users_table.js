'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("users", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
    
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
    
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("users")
  }
};
