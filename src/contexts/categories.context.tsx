import { createContext, ReactNode, useEffect, useState } from 'react';
import { getCategoriesAndDocuments } from '../utils/firebase.utils';

type CategoryItem = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  category: string;
};

type CategoriesMap = Record<string, CategoryItem[]>;

interface CategoriesContextType {
  categoriesMap: CategoriesMap;
}

interface CategoriesProviderProps {
  children: ReactNode;
}

export const CategoriesContext = createContext<CategoriesContextType>({
  categoriesMap: {},
});

export const CategoriesProvider: React.FC<CategoriesProviderProps> = ({
  children,
}) => {
  const [categoriesMap, setCategoriesMap] = useState<CategoriesMap>({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap as CategoriesMap);
    };
    getCategoriesMap();
  }, []);

  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
