import { useContext } from 'react';
import { Product } from '../../types/product.types';
import { CartContext } from '../../contexts/cart.context';
import Button from '../button/Button.component';
import './Product-card.styles.scss';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { name, price, imageUrl } = product; // Property 'imageUrl' does not exist on type 'Product'
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = (): void => addItemToCart(product);
  /* 
  Argument of type 'import("c:/Projects/Aktiva/eterna/src/types/product.types").Product' is not assignable to parameter of type 'Product'.
  Property 'imageUrl' is missing in type 'import("c:/Projects/Aktiva/eterna/src/types/product.types").Product' but required in type 'Product'
  */

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={name} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType='inverted' onClick={addProductToCart}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
