import { useContext } from 'react';
import { ProductsContext } from '../../contexts/products.context';
import './Shop.styles.scss';
import ProductCard from '../../components/product-card/Product-card.component';

const Shop: React.FC = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className='products-container'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
