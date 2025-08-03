import Link from 'next/link';

export default function SuccessPage() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1 style={{ fontSize: '2rem', color: 'green' }}>✅ تم الدفع بنجاح</h1>
      <p>شكرًا لاشتراكك! يمكنك الآن استخدام جميع الميزات.</p>
      <Link href="/">
        <button style={{ marginTop: '20px', padding: '10px 20px' }}>
          العودة إلى الصفحة الرئيسية
        </button>
      </Link>
    </div>
  );
}
