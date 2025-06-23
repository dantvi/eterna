import { useContext } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import Directory from '../../components/directory/Directory.component';
import { DirectoryCategory } from '../../types/category.types';

const Categories = () => {
  const { categories } = useContext(CategoriesContext);

  const formatted: DirectoryCategory[] = categories.map((category) => ({
    id: category.id,
    title: category.name,
    imageUrl: category.coverImage,
  }));

  return <Directory categories={formatted} />;
};

export default Categories;
