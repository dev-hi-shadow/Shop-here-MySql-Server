const stripe = require("../services/stripe");

const MakePayment = async (data) => {
    
  const session = await stripe.checkout.sessions.create({
    line_items: data,
    mode: "payment",
    success_url: `${YOUR_DOMAIN}/success.html`,
    cancel_url: `${YOUR_DOMAIN}/cancel.html`,
  });
  return session;
};
