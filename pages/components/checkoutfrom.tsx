// components/checkoutform.tsx
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function CheckoutForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheckout = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('فشل في إنشاء جلسة الدفع');
      }

      const { url } = await response.json();
      
      if (url) {
        window.location.href = url;
      } else {
        throw new Error('لم يتم إرجاع رابط الدفع');
      }
    } catch (err: any) {
      setError(err.message || 'حدث خطأ غير متوقع');
      console.error('خطأ في الدفع:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-6">
      <button
        onClick={handleCheckout}
        disabled={loading}
        className={`w-full py-3 px-4 rounded-md text-white font-medium ${
          loading ? 'bg-gray-400' : 'bg-indigo-600 hover:bg-indigo-700'
        }`}
      >
        {loading ? 'جاري التجهيز...' : 'اشتر الآن - $4.99/شهر'}
      </button>
      
      {error && (
        <div className="mt-4 text-red-500 text-sm">
          {error}
        </div>
      )}
    </div>
  );
}
