import { Link } from 'react-router-dom';
import './Directory-item.styles.scss';

interface Category {
  imageUrl: string;
  title: string;
}

const DirectoryItem = ({ category }: { category: Category }) => {
  const { imageUrl, title } = category;

  return (
    <Link
      className='directory-item-container'
      to={`/categories/${title.toLowerCase()}`}
    >
      <div
        className='background-image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className='body'>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </Link>
  );
};

export default DirectoryItem;
