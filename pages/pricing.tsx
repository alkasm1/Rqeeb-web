import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../components/CheckoutForm';
import Head from 'next/head';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>خطط التسعير - Rqeeb</title>
      </Head>
      
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Rqeeb Pro</div>
          <h2 className="block mt-1 text-lg leading-tight font-medium text-black">الاشتراك الشهري</h2>
          <p className="mt-2 text-gray-500">
            احصل على وصول كامل لجميع ميزات التحقق المتقدمة
          </p>
          <div className="mt-4">
            <span className="text-4xl font-bold text-gray-900">$4.99</span>
            <span className="text-gray-600"> /شهر</span>
          </div>
          
          <div className="mt-6">
            <Elements stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
}
