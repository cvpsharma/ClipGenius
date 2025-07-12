// File: pages/api/razorpay.js

import Razorpay from 'razorpay';

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end('Method Not Allowed');

  const { amount, currency = 'INR', receipt } = req.body;

  try {
    const options = {
      amount: amount * 100, // Convert ₹ to paise
      currency,
      receipt: receipt || `rcpt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);
    res.status(200).json({ orderId: order.id });
  } catch (error) {
    console.error('Razorpay error:', error);
    res.status(500).json({ error: 'Payment initiation failed' });
  }
}
