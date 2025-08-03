import Link from "next/link";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-white p-8">
      <h2 className="text-3xl font-bold text-center mb-6">الباقات</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="border rounded-2xl p-6 shadow">
          <h3 className="text-xl font-bold mb-2">مجانية</h3>
          <p className="text-gray-500 mb-4">فحص محدود يوميًا بدون تسجيل</p>
          <Link href="/analyze" className="bg-gray-200 px-4 py-2 rounded-xl">
            ابدأ مجانًا
          </Link>
        </div>
        <div className="border rounded-2xl p-6 shadow">
          <h3 className="text-xl font-bold mb-2">احترافية – $4.99</h3>
          <p className="text-gray-500 mb-4">تحليل غير محدود، دعم خاص، أرشفة</p>
          <form action="/api/checkout" method="POST">
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-xl">
              اشترك الآن
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
