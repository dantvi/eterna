import { useContext } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import Directory from '../../components/directory/Directory.component';
import { Category } from '../../types/category.types';

const Categories: React.FC = () => {
  const { categories } = useContext(CategoriesContext);

  const formatted = categories.map((category: Category) => ({
    id: category.id,
    title: category.name,
    imageUrl: category.coverImage,
  }));

  return <Directory categories={formatted} />;
};

export default Categories;
