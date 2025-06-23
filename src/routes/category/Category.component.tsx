import { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { getAllProducts } from '../../services/product.service';
import { Product } from '../../types/product.types';
import ProductCard from '../../components/product-card/Product-card.component';
import './category.styles.scss';

const Category: React.FC = () => {
  const { category: categoryId } = useParams<{ category: string }>();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      if (!categoryId) {
        console.warn('[Category] No categoryId in params!');
        setProducts([]);
        return;
      }

      const allProducts = await getAllProducts();

      const filtered = allProducts.filter((p) => {
        if (!p.category) return false;
        return p.category.toLowerCase() === categoryId.toLowerCase();
      });

      setProducts(filtered);
    };

    fetchProducts();
  }, [categoryId]);

  return (
    <Fragment>
      <h2 className='category-title'>{categoryId?.toUpperCase()}</h2>
      <div className='category-container'>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Fragment>
  );
};

export default Category;
