import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/product-card/Product-card.component';
import './category.styles.scss';

type CategoryItem = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
};

const Category: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState<CategoryItem[]>([]);

  useEffect(() => {
    if (category && categoriesMap[category]) {
      setProducts(categoriesMap[category]);
    }
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className='category-title'>
        {category ? category.toUpperCase() : ''}
      </h2>
      <div className='category-container'>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;
