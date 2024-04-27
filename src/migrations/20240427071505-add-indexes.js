"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addIndex("products", ["name"], {
      type: "FULLTEXT",
    });
    await queryInterface.addIndex("brands", ["name"], {
      type: "FULLTEXT",
    });
    await queryInterface.addIndex("categories", ["name"], {
      type: "FULLTEXT",
    });
    await queryInterface.addIndex("sub_categories", ["name"], {
      type: "FULLTEXT",
    });
    await queryInterface.addIndex("offers", ["title"], {
      type: "FULLTEXT",
    });
    await queryInterface.addIndex("pr_variations", ["variation_name"], {
      type: "FULLTEXT",
    });
    await queryInterface.addIndex("pr_variations", ["retail_price"]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeIndex("products", "products_name_idx");
    await queryInterface.removeIndex("brands", "brands_name_idx");
    await queryInterface.removeIndex("categories", "categories_name_idx");
    await queryInterface.removeIndex(
      "sub_categories",
      "sub_categories_name_idx"
    );
    await queryInterface.removeIndex("offers", "offers_title_idx");
    await queryInterface.removeIndex(
      "pr_variations",
      "pr_variations_variation_name_idx"
    );
    await queryInterface.removeIndex(
      "pr_variations",
      "pr_variations_retail_price_idx"
    );
  },
};
