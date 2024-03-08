"use strict";

/** @type {import('sequelize-cli').migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("seller_notify", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        references: {
          model: "users",
          key: "id",
        },
      },
      listing_optimization_suggestion_email: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      listing_optimization_suggestion_sms: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      listing_optimization_suggestion_app_notification: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      monthly_seller_statement_email: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      monthly_seller_statement_sms: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      monthly_seller_statement_app_notification: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },

      holiday_sales_prep_guide_email: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      holiday_sales_prep_guide_sms: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      holiday_sales_prep_guide_app_notification: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },

      shipping_label_expiry_reminder_email: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      shipping_label_expiry_reminder_sms: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      shipping_label_expiry_reminder_app_notification: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },

      return_processing_alert_email: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      return_processing_alert_sms: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      return_processing_alert_app_notification: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },

      account_health_status_email: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      account_health_status_sms: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      account_health_status_app_notification: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },

      policy_violation_warning_email: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      policy_violation_warning_sms: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      policy_violation_warning_app_notification: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      seller_forum_highlights_email: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      seller_forum_highlights_sms: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      seller_forum_highlights_app_notification: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      bulk_listing_processing_completion_email: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      bulk_listing_processing_completion_sms: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      bulk_listing_processing_completion_app_notification: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      catalog_update_required_email: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      catalog_update_required_sms: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      catalog_update_required_app_notification: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      brand_violation_alert_email: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      brand_violation_alert_sms: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      brand_violation_alert_app_notification: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      seller_performance_award_email: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      seller_performance_award_sms: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      seller_performance_award_app_notification: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },

      product_recall_notice_email: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      product_recall_notice_sms: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      product_recall_notice_app_notification: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },

      export_opportunity_alert_email: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      export_opportunity_alert_sms: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      export_opportunity_alert_app_notification: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },

      new_order_notification_email: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      new_order_notification_sms: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      new_order_notification_app_notification: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },

      inventory_alert_email: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      inventory_alert_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      inventory_alert_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },

      order_fulfillment_reminder_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      order_fulfillment_reminder_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      order_fulfillment_reminder_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },

      payment_receipt_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      payment_receipt_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      payment_receipt_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },

      customer_question_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      customer_question_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      customer_question_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },

      product_listing_approval_rejection_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      product_listing_approval_rejection_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      product_listing_approval_rejection_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },

      review_alert_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      review_alert_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      review_alert_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },

      promotional_opportunity_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      promotional_opportunity_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      promotional_opportunity_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },

      performance_insight_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      performance_insight_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      performance_insight_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },

      competitive_analysis_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      competitive_analysis_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      competitive_analysis_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },

      policy_change_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      policy_change_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      policy_change_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },

      seller_community_update_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      seller_community_update_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      seller_community_update_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      feature_update_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      feature_update_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      feature_update_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      seasonal_selling_tip_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      seasonal_selling_tip_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      seasonal_selling_tip_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      stripe_account_setup_reminder_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      stripe_account_setup_reminder_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      stripe_account_setup_reminder_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      stripe_low_balance_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      stripe_low_balance_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      stripe_low_balance_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      stripe_payout_notification_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      stripe_payout_notification_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      stripe_payout_notification_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      stripe_account_verification_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      stripe_account_verification_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      stripe_account_verification_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      stripe_dispute_notification_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      stripe_dispute_notification_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      stripe_dispute_notification_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      stripe_chargeback_alert_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      stripe_chargeback_alert_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      stripe_chargeback_alert_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      failed_payment_alert_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      failed_payment_alert_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      failed_payment_alert_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
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
      created_by: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "users",
          key: "id",
        },
      },
      updated_by: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "users",
          key: "id",
        },
      },
      deleted_by: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "users",
          key: "id",
        },
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("seller_notify");
  },
};
