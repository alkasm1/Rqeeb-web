import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function PaymentSuccess() {
  const router = useRouter();
  const [status, setStatus] = useState('جارٍ التحقق من الدفع...');
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const verifyPayment = async () => {
      const { session_id } = router.query;
      
      if (!session_id) {
        setStatus('معرف الجلسة غير موجود');
        return;
      }

      try {
        const response = await fetch('/api/verify-payment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ sessionId: session_id }),
        });

        const data = await response.json();
        
        if (data.success) {
          setStatus('تم التحقق من الدفع بنجاح!');
          setIsVerified(true);
          
          // تخزين حالة الاشتراك
          localStorage.setItem('rqeeb_subscription', 'active');
          
          // توجيه المستخدم إلى لوحة التحكم
          setTimeout(() => {
            router.push('/dashboard');
          }, 3000);
        } else {
          setStatus('فشل في التحقق من الدفع. الرجاء التواصل مع الدعم.');
        }
      } catch (error) {
        console.error('Error verifying payment:', error);
        setStatus('حدث خطأ أثناء التحقق من الدفع.');
      }
    };

    verifyPayment();
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Head>
        <title>حالة الدفع - Rqeeb</title>
      </Head>
      
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-4">حالة الدفع</h1>
        <div className="mb-6">
          {isVerified ? (
            <div className="text-green-500">
              <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
          ) : (
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
          )}
          <p className="text-lg">{status}</p>
        </div>
        {isVerified && (
          <p className="text-gray-600">سيتم توجيهك إلى لوحة التحكم تلقائيًا...</p>
        )}
      </div>
    </div>
  );
}
