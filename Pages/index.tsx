// rqeeb-web: مشروع Next.js لواجهة Rqeeb مع Stripe

// ✅ الملفات الرئيسية التي سنبنيها: // - pages/index.tsx: الصفحة الرئيسية // - pages/pricing.tsx: صفحة الباقات // - pages/analyze.tsx: صفحة الفحص (محمية) // - pages/api/checkout.ts: ربط Stripe // - components/Navbar.tsx + Layout.tsx

// ✅ تثبيت الحزم المطلوبة: // npm install next react react-dom tailwindcss stripe @stripe/stripe-js

// ✅ ملف tailwind.config.ts و postcss.config.js سيتم توليدهم تلقائيًا

// 📁 pages/index.tsx "use client"; import Link from "next/link";

export default function Home() { return ( <main className="min-h-screen bg-gray-50 flex items-center justify-center p-8"> <div className="max-w-xl text-center"> <h1 className="text-4xl font-bold text-gray-800 mb-4">🔎 Rqeeb</h1> <p className="text-gray-600 mb-6"> تحقق من صحة الوثائق والصور بسرعة وخصوصية، دون الحاجة لرفع البيانات. </p> <div className="flex gap-4 justify-center"> <Link href="/pricing" className="bg-blue-600 text-white px-6 py-2 rounded-xl">ابدأ الآن</Link> <Link href="/analyze" className="border px-6 py-2 rounded-xl">تجربة مجانية</Link> </div> </div> </main> ); }

// 📁 pages/pricing.tsx import Link from "next/link";

export default function Pricing() { return ( <div className="min-h-screen bg-white p-8"> <h2 className="text-3xl font-bold text-center mb-6">الباقات</h2> <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"> <div className="border rounded-2xl p-6 shadow"> <h3 className="text-xl font-bold mb-2">مجانية</h3> <p className="text-gray-500 mb-4">فحص محدود يوميًا بدون تسجيل</p> <Link href="/analyze" className="bg-gray-200 px-4 py-2 rounded-xl">ابدأ مجانًا</Link> </div> <div className="border rounded-2xl p-6 shadow"> <h3 className="text-xl font-bold mb-2">احترافية – $4.99</h3> <p className="text-gray-500 mb-4">تحليل غير محدود، دعم خاص، أرشفة</p> <Link href="/api/checkout" className="bg-blue-600 text-white px-4 py-2 rounded-xl">اشترك الآن</Link> </div> </div> </div> ); }

// 📁 pages/analyze.tsx export default function Analyze() { return ( <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6"> <div className="bg-white p-8 rounded-xl shadow max-w-md w-full"> <h2 className="text-2xl font-bold mb-4">واجهة التحليل</h2> <p className="text-gray-600">(هنا يتم دمج أداة فحص الوثائق لاحقًا)</p> </div> </div> ); }

// 📁 pages/api/checkout.ts import { NextApiRequest, NextApiResponse } from "next"; import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2022-11-15" });

export default async function handler(req: NextApiRequest, res: NextApiResponse) { if (req.method === "POST") { try { const session = await stripe.checkout.sessions.create({ payment_method_types: ["card"], line_items: [ { price: process.env.STRIPE_PRICE_ID!, quantity: 1, }, ], mode: "subscription", trial_period_days: 7, success_url: ${req.headers.origin}/success, cancel_url: ${req.headers.origin}/pricing, }); res.redirect(303, session.url!); } catch (err) { res.status(500).json({ error: "فشل إنشاء الجلسة" }); } } else { res.setHeader("Allow", "POST"); res.status(405).end("Method Not Allowed"); } }

