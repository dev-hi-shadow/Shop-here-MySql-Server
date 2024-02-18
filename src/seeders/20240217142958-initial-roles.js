"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("roles", [
      {
        name: "SUPER_ADMIN",
      },
      {
        name: "ADMIN",
      },
      {
        name: "SELLER",
      },
      {
        name: "CUSTOMER",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("roles", null, {});
  },
};
