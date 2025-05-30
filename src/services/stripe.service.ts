import { CheckoutItem } from '../types/checkout.types';

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

export const createCheckoutSession = async (
  items: CheckoutItem[],
  customerEmail: string
): Promise<string> => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/checkout/create-checkout-session`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items, customerEmail }),
      }
    );
    if (!response.ok) {
      throw new Error('Failed to create checkout session');
    }
    const data = await response.json();
    return data.url;
  } catch (error) {
    console.error('[stripe.service] Checkout session error:', error);
    throw error;
  }
};
