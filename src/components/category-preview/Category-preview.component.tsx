import { Link } from 'react-router-dom';
import ProductCard from '../product-card/Product-card.component';
import './category-preview.styles.scss';

type CategoryItem = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  category: string;
};

type CategoryPreviewProps = {
  title: string;
  products: CategoryItem[];
};

const CategoryPreview: React.FC<CategoryPreviewProps> = ({
  title,
  products,
}) => {
  return (
    <div className='category-preview-container'>
      <h2>
        <Link className='title' to={title}>
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className='preview'>
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
