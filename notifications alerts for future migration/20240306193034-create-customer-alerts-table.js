"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("customer_notify", {
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
      order_delayed_notification_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      order_delayed_notification_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      order_delayed_notification_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      shipping_upgrade_offer_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      shipping_upgrade_offer_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      shipping_upgrade_offer_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      order_return_received_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      order_return_received_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      order_return_received_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      return_status_update_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      return_status_update_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      return_status_update_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      refund_issued_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      refund_issued_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      refund_issued_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      payment_method_expiry_reminder_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      payment_method_expiry_reminder_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      payment_method_expiry_reminder_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      account_reactivation_offer_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      account_reactivation_offer_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      account_reactivation_offer_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      membership_renewal_reminder_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      membership_renewal_reminder_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      membership_renewal_reminder_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      shipping_address_update_request_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      shipping_address_update_request_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      shipping_address_update_request_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      product_review_reminder_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      product_review_reminder_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      product_review_reminder_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      order_assembly_update_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      order_assembly_update_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      order_assembly_update_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      digital_product_access_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      digital_product_access_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      digital_product_access_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      gift_card_expiry_reminder_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      gift_card_expiry_reminder_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      gift_card_expiry_reminder_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      appointment_confirmation_reminder_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      appointment_confirmation_reminder_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      appointment_confirmation_reminder_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      change_in_order_pickup_location_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      change_in_order_pickup_location_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      change_in_order_pickup_location_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      order_confirmed_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      order_confirmed_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      order_confirmed_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      payment_confirmed_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      payment_confirmed_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      payment_confirmed_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      order_shipped_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      order_shipped_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      order_shipped_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      order_delivered_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      order_delivered_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      order_delivered_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      cart_abandonment_reminder_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      cart_abandonment_reminder_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      cart_abandonment_reminder_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      price_drop_alert_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      price_drop_alert_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      price_drop_alert_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      product_back_in_stock_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      product_back_in_stock_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      product_back_in_stock_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      review_request_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      review_request_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      review_request_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      promotional_offer_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      promotional_offer_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      promotional_offer_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      loyalty_program_update_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      loyalty_program_update_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      loyalty_program_update_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      personalized_recommendation_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      personalized_recommendation_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      personalized_recommendation_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },

      birthday_anniversary_discount_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      birthday_anniversary_discount_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      birthday_anniversary_discount_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      limited_edition_product_launch_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      limited_edition_product_launch_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      limited_edition_product_launch_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      order_modification_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      order_modification_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      order_modification_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      interactive_notification_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      interactive_notification_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      interactive_notification_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      restock_request_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      restock_request_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      restock_request_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      welcome_message_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      welcome_message_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      welcome_message_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      account_verification_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      account_verification_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      account_verification_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      password_reset_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      wishlist_item_available_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      wishlist_item_available_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      wishlist_item_available_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      exclusive_membership_offer_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      exclusive_membership_offer_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      exclusive_membership_offer_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      event_reminder_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      event_reminder_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      event_reminder_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      survey_invitation_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      survey_invitation_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      survey_invitation_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      account_deactivation_notice_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      account_deactivation_notice_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      account_deactivation_notice_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      privacy_policy_update_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      privacy_policy_update_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      privacy_policy_update_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      terms_of_service_change_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      terms_of_service_change_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      terms_of_service_change_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      security_alert_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      security_alert_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      security_alert_app_notification: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      feedback_acknowledgement_email: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      feedback_acknowledgement_sms: {
        type: Sequelize.BOOLEAN,
        title: { type: Sequelize.STRING, allowNull: false },
      },
      feedback_acknowledgement_app_notification: {
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
    await queryInterface.dropTable("customer_notify");
  },
};
