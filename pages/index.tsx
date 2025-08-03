"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">🔎 Rqeeb</h1>
        <p className="text-gray-600 mb-6">
          تحقق من صحة الوثائق والصور بسرعة وخصوصية، دون الحاجة لرفع البيانات.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/pricing" className="bg-blue-600 text-white px-6 py-2 rounded-xl">
            ابدأ الآن
          </Link>
          <Link href="/analyze" className="border px-6 py-2 rounded-xl">
            تجربة مجانية
          </Link>
        </div>
      </div>
    </main>
  );
}
