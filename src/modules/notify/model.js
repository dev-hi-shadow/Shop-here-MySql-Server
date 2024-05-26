const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../../config/mysql");

class AdminNotify extends Model {
  static associate(db) {
    AdminNotify.belongsTo(db.Users, {
      as: "user",
      foreignKey: "user_id",
      targetKey: "id",
    });
  }
}
AdminNotify.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      references: {
        model: "users",
        key: "id",
      },
    },

    user_registration_report_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    user_registration_report_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    user_registration_report_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    daily_sales_summary_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    daily_sales_summary_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    daily_sales_summary_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    weekly_performance_overview_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    weekly_performance_overview_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    weekly_performance_overview_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    monthly_profit_analysis_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    monthly_profit_analysis_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    monthly_profit_analysis_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    annual_revenue_report_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },

    annual_revenue_report_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    annual_revenue_report_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    marketing_campaign_performance_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    marketing_campaign_performance_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    marketing_campaign_performance_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    user_activity_insights_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    user_activity_insights_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    user_activity_insights_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    platform_usage_stats_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    platform_usage_stats_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    platform_usage_stats_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    inventory_level_summary_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    inventory_level_summary_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    inventory_level_summary_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    supplier_contract_renewal_reminder_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    supplier_contract_renewal_reminder_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    supplier_contract_renewal_reminder_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    technology_upgrade_alert_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    technology_upgrade_alert_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    technology_upgrade_alert_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    compliance_audit_notification_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    compliance_audit_notification_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    compliance_audit_notification_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    dispute_resolution_update_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    dispute_resolution_update_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    dispute_resolution_update_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    fraud_investigation_result_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    fraud_investigation_result_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    fraud_investigation_result_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    new_order_alert_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    new_order_alert_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    new_order_alert_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    low_stock_warning_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    low_stock_warning_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    low_stock_warning_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    high_volume_traffic_alert_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    high_volume_traffic_alert_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    high_volume_traffic_alert_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    payment_failure_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    payment_failure_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    payment_failure_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    seller_account_request_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    seller_account_request_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    seller_account_request_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    customer_feedback_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    customer_feedback_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    customer_feedback_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    system_error_or_downtime_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    system_error_or_downtime_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    system_error_or_downtime_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    customer_service_metric_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    customer_service_metric_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    customer_service_metric_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    fraud_alert_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    fraud_alert_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    fraud_alert_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    performance_report_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    performance_report_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    performance_report_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    regulatory_compliance_alert_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    regulatory_compliance_alert_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    regulatory_compliance_alert_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    feedback_review_summary_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    feedback_review_summary_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    feedback_review_summary_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    market_trends_notification_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    market_trends_notification_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    market_trends_notification_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    stripe_account_setup_reminder_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    stripe_account_setup_reminder_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    stripe_account_setup_reminder_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    stripe_low_balance_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    stripe_low_balance_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    stripe_low_balance_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    stripe_payout_notification_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    stripe_payout_notification_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    stripe_payout_notification_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    stripe_account_verification_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    stripe_account_verification_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    stripe_account_verification_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    stripe_dispute_notification_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    stripe_dispute_notification_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    stripe_dispute_notification_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    stripe_chargeback_alert_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    stripe_chargeback_alert_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    stripe_chargeback_alert_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    failed_payment_alert_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    failed_payment_alert_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    failed_payment_alert_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
  },
  {
    sequelize,
    tableName: "admin_notify",
    modelName: "AdminNotify",
    hooks: {
      afterDestroy: async (instance, options) => {
        if (options?.deleted_by) {
          instance.setDataValue("deleted_by", options?.deleted_by);
          await instance.save();
        }
      },
    },
  }
);

class SellerNotify extends Model {
  static associate(db) {
    SellerNotify.belongsTo(db.Users, {
      as: "user",
      foreignKey: "user_id",
      targetKey: "id",
    });
  }
}
SellerNotify.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      references: {
        model: "users",
        key: "id",
      },
    },
    listing_optimization_suggestion_email: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    listing_optimization_suggestion_sms: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    listing_optimization_suggestion_app_notification: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    monthly_seller_statement_email: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    monthly_seller_statement_sms: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    monthly_seller_statement_app_notification: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },

    holiday_sales_prep_guide_email: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    holiday_sales_prep_guide_sms: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    holiday_sales_prep_guide_app_notification: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },

    shipping_label_expiry_reminder_email: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    shipping_label_expiry_reminder_sms: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    shipping_label_expiry_reminder_app_notification: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },

    return_processing_alert_email: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    return_processing_alert_sms: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    return_processing_alert_app_notification: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },

    account_health_status_email: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    account_health_status_sms: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    account_health_status_app_notification: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },

    policy_violation_warning_email: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    policy_violation_warning_sms: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    policy_violation_warning_app_notification: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    seller_forum_highlights_email: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    seller_forum_highlights_sms: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    seller_forum_highlights_app_notification: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    bulk_listing_processing_completion_email: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    bulk_listing_processing_completion_sms: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    bulk_listing_processing_completion_app_notification: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    catalog_update_required_email: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    catalog_update_required_sms: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    catalog_update_required_app_notification: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    brand_violation_alert_email: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    brand_violation_alert_sms: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    brand_violation_alert_app_notification: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    seller_performance_award_email: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    seller_performance_award_sms: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    seller_performance_award_app_notification: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },

    product_recall_notice_email: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    product_recall_notice_sms: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    product_recall_notice_app_notification: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },

    export_opportunity_alert_email: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    export_opportunity_alert_sms: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    export_opportunity_alert_app_notification: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },

    new_order_notification_email: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    new_order_notification_sms: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    new_order_notification_app_notification: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },

    inventory_alert_email: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    inventory_alert_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    inventory_alert_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },

    order_fulfillment_reminder_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    order_fulfillment_reminder_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    order_fulfillment_reminder_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },

    payment_receipt_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    payment_receipt_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    payment_receipt_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },

    customer_question_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    customer_question_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    customer_question_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },

    product_listing_approval_rejection_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    product_listing_approval_rejection_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    product_listing_approval_rejection_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },

    review_alert_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    review_alert_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    review_alert_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },

    promotional_opportunity_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    promotional_opportunity_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    promotional_opportunity_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },

    performance_insight_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    performance_insight_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    performance_insight_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },

    competitive_analysis_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    competitive_analysis_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    competitive_analysis_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },

    policy_change_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    policy_change_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    policy_change_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },

    seller_community_update_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    seller_community_update_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    seller_community_update_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    feature_update_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    feature_update_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    feature_update_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    seasonal_selling_tip_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    seasonal_selling_tip_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    seasonal_selling_tip_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    stripe_account_setup_reminder_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    stripe_account_setup_reminder_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    stripe_account_setup_reminder_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    stripe_low_balance_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    stripe_low_balance_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    stripe_low_balance_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    stripe_payout_notification_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    stripe_payout_notification_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    stripe_payout_notification_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    stripe_account_verification_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    stripe_account_verification_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    stripe_account_verification_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    stripe_dispute_notification_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    stripe_dispute_notification_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    stripe_dispute_notification_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    stripe_chargeback_alert_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    stripe_chargeback_alert_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    stripe_chargeback_alert_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    failed_payment_alert_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    failed_payment_alert_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    failed_payment_alert_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
  },
  {
    sequelize,
    tableName: "seller_notify",
    modelName: "SellerNotify",
    hooks: {
      afterDestroy: async (instance, options) => {
        if (options?.deleted_by) {
          instance.setDataValue("deleted_by", options?.deleted_by);
          await instance.save();
        }
      },
    },
  }
);

class CustomerNotify extends Model {
  static associate(db) {
    CustomerNotify.belongsTo(db.Users, {
      as: "user",
      foreignKey: "user_id",
      targetKey: "id",
    });
  }
}
CustomerNotify.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      references: {
        model: "users",
        key: "id",
      },
    },
    order_delayed_notification_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    order_delayed_notification_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    order_delayed_notification_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    shipping_upgrade_offer_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    shipping_upgrade_offer_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    shipping_upgrade_offer_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    order_return_received_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    order_return_received_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    order_return_received_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    return_status_update_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    return_status_update_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    return_status_update_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    refund_issued_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    refund_issued_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    refund_issued_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    payment_method_expiry_reminder_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    payment_method_expiry_reminder_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    payment_method_expiry_reminder_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    account_reactivation_offer_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    account_reactivation_offer_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    account_reactivation_offer_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    membership_renewal_reminder_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    membership_renewal_reminder_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    membership_renewal_reminder_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    shipping_address_update_request_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    shipping_address_update_request_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    shipping_address_update_request_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    product_review_reminder_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    product_review_reminder_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    product_review_reminder_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    order_assembly_update_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    order_assembly_update_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    order_assembly_update_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    digital_product_access_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    digital_product_access_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    digital_product_access_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    gift_card_expiry_reminder_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    gift_card_expiry_reminder_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    gift_card_expiry_reminder_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    appointment_confirmation_reminder_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    appointment_confirmation_reminder_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    appointment_confirmation_reminder_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    change_in_order_pickup_location_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    change_in_order_pickup_location_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    change_in_order_pickup_location_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    order_confirmed_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    order_confirmed_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    order_confirmed_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    payment_confirmed_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    payment_confirmed_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    payment_confirmed_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    order_shipped_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    order_shipped_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    order_shipped_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    order_delivered_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    order_delivered_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    order_delivered_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    cart_abandonment_reminder_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    cart_abandonment_reminder_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    cart_abandonment_reminder_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    price_drop_alert_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    price_drop_alert_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    price_drop_alert_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    product_back_in_stock_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    product_back_in_stock_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    product_back_in_stock_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    review_request_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    review_request_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    review_request_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    promotional_offer_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    promotional_offer_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    promotional_offer_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    loyalty_program_update_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    loyalty_program_update_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    loyalty_program_update_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    personalized_recommendation_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    personalized_recommendation_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    personalized_recommendation_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },

    birthday_anniversary_discount_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    birthday_anniversary_discount_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    birthday_anniversary_discount_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    limited_edition_product_launch_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    limited_edition_product_launch_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    limited_edition_product_launch_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    order_modification_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    order_modification_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    order_modification_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    interactive_notification_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    interactive_notification_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    interactive_notification_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    restock_request_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    restock_request_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    restock_request_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    welcome_message_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    welcome_message_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    welcome_message_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    account_verification_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    account_verification_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    account_verification_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    password_reset_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    wishlist_item_available_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    wishlist_item_available_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    wishlist_item_available_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    exclusive_membership_offer_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    exclusive_membership_offer_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    exclusive_membership_offer_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    event_reminder_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    event_reminder_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    event_reminder_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    survey_invitation_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    survey_invitation_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    survey_invitation_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    account_deactivation_notice_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    account_deactivation_notice_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    account_deactivation_notice_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    privacy_policy_update_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    privacy_policy_update_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    privacy_policy_update_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    terms_of_service_change_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    terms_of_service_change_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    terms_of_service_change_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    security_alert_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    security_alert_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    security_alert_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    feedback_acknowledgement_email: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    feedback_acknowledgement_sms: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
    feedback_acknowledgement_app_notification: {
      type: DataTypes.BOOLEAN,
      title: { type: DataTypes.STRING, allowNull: false },
    },
  },
  {
    sequelize,
    tableName: "customer_notify",
    modelName: "CustomerNotify",
    hooks: {
      afterDestroy: async (instance, options) => {
        if (options?.deleted_by) {
          instance.setDataValue("deleted_by", options?.deleted_by);
          await instance.save();
        }
      },
    },
  }
);

const NotifyModels = {
  AdminNotify,
  SellerNotify,
  CustomerNotify,
};

module.exports = NotifyModels;
