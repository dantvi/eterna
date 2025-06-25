import { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { getAllProducts } from '../../services/product.service';
import { Product } from '../../types/product.types';
import ProductCard from '../../components/product-card/Product-card.component';
import './category.styles.scss';

const Category: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const allProducts = await getAllProducts();

        const filtered = allProducts.filter(
          (product) =>
            product.category?.toLowerCase() === categoryId?.toLowerCase()
        );

        setProducts(filtered);
      } catch (err) {
        console.error('[Category] Failed to load products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]);

  if (loading) return <p>Loading products...</p>;

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
