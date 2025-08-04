// pages/api/checkout.ts
import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: "اشتراك Rqeeb المميز",
              },
              unit_amount: 499,
              recurring: {
                interval: "month",
              },
            },
            quantity: 1,
          },
        ],
        mode: "subscription",
        subscription_data: {
          trial_period_days: 7,
        },
        success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/pricing`,
      });

      // تأكد من إرجاع url وليس id
      res.status(200).json({ url: session.url });
    } catch (err: any) {
      res.status(500).json({ 
        statusCode: 500, 
        message: err.message || "خطأ في إنشاء جلسة الدفع" 
      });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end("الطريقة غير مسموحة");
  }
}
