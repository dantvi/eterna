import { createContext, ReactNode, useEffect, useState } from 'react';
import { Product } from '../interfaces/product';

import { getCategoriesAndDocuments } from '../utils/firebase.utils.js';

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
  const [products] = useState<Product[]>([]);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
    };
    getCategoriesMap();
  }, []);

  const value = { products };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
