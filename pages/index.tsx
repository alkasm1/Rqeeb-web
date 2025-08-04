import Head from 'next/head';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Head>
        <title>Rqeeb - كشف التزوير البصري</title>
      </Head>

      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="text-xl font-bold text-indigo-600">Rqeeb</div>
          <nav>
            <Link href="/pricing" className="ml-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
              الاشتراك المميز
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            الحل الأمثل للكشف عن التزوير البصري
          </h1>
          <p className="mt-6 max-w-lg mx-auto text-xl text-gray-500">
            تقنية متقدمة للتحقق من صحة الوثائق والصور في ثوانٍ
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <Link href="/analyze" className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
            ابدأ التحليل الآن
          </Link>
        </div>
      </main>
    </div>
  );
}
