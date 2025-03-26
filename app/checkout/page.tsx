"use client";

import CheckoutPage from '@/components/CheckoutPage';
import convertToSubcurrency from '@/lib/convertToSubcurrency';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import styles from "./page.module.css";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

if (process.env.Next_PUBLIC_STRIPE_PUBLISHABLE_KEY === undefined) {
  throw new Error('NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined');
}

export default function Home() {
  return (
    <div className={styles.page}>
      <Elements stripe={stripePromise}>
        <CheckoutPage
          currency="usd"
          amount={convertToSubcurrency(100, 'usd')}
        />
      </Elements>
    </div>
  );
}
