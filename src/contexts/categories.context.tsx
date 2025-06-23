import { createContext, ReactNode, useEffect, useState } from 'react';
import { getAllCategories } from '../services/category.service';
import { Category } from '../types/category.types';

interface CategoriesContextType {
  categories: Category[];
}

interface CategoriesProviderProps {
  children: ReactNode;
}

export const CategoriesContext = createContext<CategoriesContextType>({
  categories: [],
});

export const CategoriesProvider: React.FC<CategoriesProviderProps> = ({
  children,
}) => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getAllCategories();
        setCategories(data);
      } catch (error) {
        console.error('[CategoriesContext] Failed to fetch categories:', error);
      }
    };
    fetchCategories();
  }, []);

  const value = { categories };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
