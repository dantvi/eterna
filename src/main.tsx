import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { CategoriesProvider } from './contexts/categories.context';
import { CartProvider } from './contexts/cart.context';
import './index.scss';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CategoriesProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </CategoriesProvider>
  </StrictMode>
);
