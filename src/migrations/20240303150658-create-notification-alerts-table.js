"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("notifications_alerts", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      alert: { type: Sequelize.STRING, allowNull: false, unique: true },
      title: { type: Sequelize.STRING, allowNull: false },
      title_for_admin: { type: Sequelize.STRING, allowNull: true },
      title_for_seller: { type: Sequelize.STRING, allowNull: true },
      title_for_customer: { type: Sequelize.STRING, allowNull: true },
      seller_email: { type: Sequelize.BOOLEAN, allowNull: false },
      seller_notifications: { type: Sequelize.BOOLEAN, allowNull: false },
      seller_sms: { type: Sequelize.BOOLEAN, allowNull: false },
      admin_email: { type: Sequelize.BOOLEAN, allowNull: false },
      admin_notifications: { type: Sequelize.BOOLEAN, allowNull: false },
      admin_sms: { type: Sequelize.BOOLEAN, allowNull: false },
      customer_email: { type: Sequelize.BOOLEAN, allowNull: false },
      customer_notifications: { type: Sequelize.BOOLEAN, allowNull: false },
      customer_sms: { type: Sequelize.BOOLEAN, allowNull: false },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("notifications_alerts");
  },
};
