"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("qb_config", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      qb_access_token: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      qb_refresh_token: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      qb_access_token_expires_in: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      qb_refresh_token_expires_in: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      deleted_at: {
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("qb_config");
  },
};
