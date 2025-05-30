import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import Button from './Button.component';
import { CheckoutItem } from '../../types/checkout.types';

const CheckoutPaymentButton = () => {
  const { cartItems } = useContext(CartContext);

  const handlePayment = async () => {
    try {
      const checkoutItems: CheckoutItem[] = cartItems.map((item) => ({
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      }));

      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/checkout/create-checkout-session`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            customerEmail: 'customer@example.com', // TODO: replace with real email from user context
            items: checkoutItems,
          }),
        }
      );

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        console.error('Stripe session URL missing');
      }
    } catch (error) {
      console.error('Payment error:', error);
    }
  };

  return <Button onClick={handlePayment}>Pay with card</Button>;
};

export default CheckoutPaymentButton;
