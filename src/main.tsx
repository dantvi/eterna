import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { ProductsProvider } from './contexts/products.context';
import { CartProvider } from './contexts/cart.context';
import './index.scss';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProductsProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductsProvider>
  </StrictMode>
);
