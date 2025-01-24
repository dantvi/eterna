import { createContext, ReactNode, useState } from 'react';
import { Product } from '../interfaces/product';
import PRODUCTS from '../shop-data.json';

interface ProductsContextType {
  products: Product[];
}

interface ProductsProviderProps {
  children: ReactNode;
}

export const ProductsContext = createContext<ProductsContextType>({
  products: [],
});

export const ProductsProvider: React.FC<ProductsProviderProps> = ({
  children,
}) => {
  const [products] = useState<Product[]>(PRODUCTS);
  const value = { products };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
