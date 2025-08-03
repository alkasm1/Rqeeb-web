import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price: process.env.STRIPE_PRICE_ID!,
            quantity: 1,
          },
        ],
        mode: "subscription",
        trial_period_days: 7,
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/pricing`,
      });
      res.redirect(303, session.url!);
    } catch (err) {
      res.status(500).json({ error: "فشل إنشاء الجلسة" });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
