import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const OrderConfirmation = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    if (sessionId) {
      // TODO: Fetch order from backend using session_id
      setMessage('Thank you! Your payment was successful.');
    } else {
      setMessage('Missing session ID.');
    }
  }, [sessionId]);

  return (
    <div className='order-confirmation'>
      <h1>Order Confirmation</h1>
      <p>{message}</p>
    </div>
  );
};

export default OrderConfirmation;
