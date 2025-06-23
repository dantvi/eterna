import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../contexts/categories.context';
import { getAllProducts } from '../../services/product.service';
import { Product } from '../../types/product.types';
import ProductCard from '../../components/product-card/Product-card.component';
import './category.styles.scss';

const Category: React.FC = () => {
  const { category: categoryId } = useParams<{ category: string }>();
  const { categories } = useContext(CategoriesContext);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts: Product[] = await getAllProducts();
      const cat = categories.find((c) => c.id === categoryId);
      const filtered = cat
        ? allProducts.filter((p) => p.category === cat.id)
        : [];
      setProducts(filtered);
    };
    fetchProducts();
  }, [categoryId, categories]);

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
