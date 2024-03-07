"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("admin_notify", {
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

      user_registration_report_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      user_registration_report_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      user_registration_report_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      daily_sales_summary_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      daily_sales_summary_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      daily_sales_summary_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      weekly_performance_overview_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      weekly_performance_overview_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      weekly_performance_overview_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      monthly_profit_analysis_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      monthly_profit_analysis_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      monthly_profit_analysis_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      annual_revenue_report_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },

      annual_revenue_report_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      annual_revenue_report_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      marketing_campaign_performance_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      marketing_campaign_performance_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      marketing_campaign_performance_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      user_activity_insights_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      user_activity_insights_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      user_activity_insights_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      platform_usage_stats_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      platform_usage_stats_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      platform_usage_stats_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      inventory_level_summary_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      inventory_level_summary_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      inventory_level_summary_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      supplier_contract_renewal_reminder_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      supplier_contract_renewal_reminder_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      supplier_contract_renewal_reminder_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      technology_upgrade_alert_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      technology_upgrade_alert_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      technology_upgrade_alert_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      compliance_audit_notification_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      compliance_audit_notification_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      compliance_audit_notification_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      dispute_resolution_update_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      dispute_resolution_update_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      dispute_resolution_update_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      fraud_investigation_result_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      fraud_investigation_result_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      fraud_investigation_result_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      new_order_alert_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      new_order_alert_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      new_order_alert_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      low_stock_warning_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      low_stock_warning_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      low_stock_warning_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      high_volume_traffic_alert_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      high_volume_traffic_alert_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      high_volume_traffic_alert_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      payment_failure_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      payment_failure_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      payment_failure_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      seller_account_request_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      seller_account_request_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      seller_account_request_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      customer_feedback_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      customer_feedback_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      customer_feedback_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      system_error_or_downtime_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      system_error_or_downtime_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      system_error_or_downtime_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      customer_service_metric_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      customer_service_metric_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      customer_service_metric_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      fraud_alert_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      fraud_alert_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      fraud_alert_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      performance_report_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      performance_report_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      performance_report_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      regulatory_compliance_alert_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      regulatory_compliance_alert_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      regulatory_compliance_alert_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      feedback_review_summary_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      feedback_review_summary_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      feedback_review_summary_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      market_trends_notification_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      market_trends_notification_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      market_trends_notification_app_notification: {
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
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("admin_notify");
  },
};
