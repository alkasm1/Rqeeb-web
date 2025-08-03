import Link from 'next/link';

export default function CancelPage() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1 style={{ fontSize: '2rem', color: 'red' }}>❌ تم إلغاء العملية</h1>
      <p>لم يتم إتمام الدفع. يمكنك المحاولة مرة أخرى.</p>
      <Link href="/pricing">
        <button style={{ marginTop: '20px', padding: '10px 20px' }}>
          العودة إلى صفحة الاشتراك
        </button>
      </Link>
    </div>
  );
}
