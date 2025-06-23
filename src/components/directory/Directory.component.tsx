import DirectoryItem from '../directory-item/Directory-item.component';
import { DirectoryCategory } from '../../types/category.types';
import './Directory.styles.scss';

const Directory = ({ categories }: { categories: DirectoryCategory[] }) => {
  return (
    <div className='directory-container'>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
