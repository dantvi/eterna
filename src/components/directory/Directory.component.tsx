import DirectoryItem from '../directory-item/Directory-item.component';
import './Directory.styles.scss';

interface Category {
  id: number;
  imageUrl: string;
  title: string;
}

const Directory = ({ categories }: { categories: Category[] }) => {
  return (
    <div className='directory-container'>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
