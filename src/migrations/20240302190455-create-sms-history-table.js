"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("sms_history", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      body: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      dateSent: { type: Sequelize.DATE, allowNull: true },
      dateCreated: { type: Sequelize.DATE, allowNull: false },

      to: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      sid: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      order_id: { type: Sequelize.INTEGER, allowNull: true },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("sms_history");
  },
};
