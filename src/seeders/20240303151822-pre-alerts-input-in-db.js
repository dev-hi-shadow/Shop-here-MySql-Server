"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "notifications_alerts",
      [
        {
          alert: "ORDER_SHIPPED",
          title: "Order Shipped",
          title_for_customer: "Order Shipped",
          title_for_admin: "Order Shipped",
          seller_email: true,
          seller_notifications: true,
          seller_sms: true,
          admin_email: true,
          admin_notifications: true,
          admin_sms: true,
          customer_email: true,
          customer_notifications: true,
          customer_sms: true,
        },
        {
          alert: "ORDER_CREATED",
          title: "New Order",
          title_for_customer: "Order Placed",
          title_for_admin: "New Order",
          title_for_seller: "New Order",
          seller_email: true,
          seller_notifications: true,
          seller_sms: true,
          admin_email: true,
          admin_notifications: true,
          admin_sms: true,
          customer_email: true,
          customer_notifications: true,
          customer_sms: true,
        },
      ],
      {
        logging: true,
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("notification_alerts", null, {});
  },
};
