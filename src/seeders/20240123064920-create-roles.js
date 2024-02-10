"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("roles", [
      {
        name: "Super Admin",
      },
      {
        name: "Admin",
      },
      {
        name: "Property Manager",
      },
      {
        name: "Service Provider",
      },
      {
        name: "Tenant",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("roles", null, {});
  },
};
