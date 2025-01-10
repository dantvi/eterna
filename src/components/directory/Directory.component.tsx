import CategoryItem from '../category-item/Category-item.component';
import './Directory.styles.scss';

interface Category {
  id: number;
  imageUrl: string;
  title: string;
}

const Directory = ({ categories }: { categories: Category[] }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}

export default Directory;
