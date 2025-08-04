import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function SubscriptionGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  
  useEffect(() => {
    const subscriptionStatus = localStorage.getItem('rqeeb_subscription');
    
    if (subscriptionStatus !== 'active') {
      router.push('/pricing');
    }
  }, [router]);

  return <>{children}</>;
}
