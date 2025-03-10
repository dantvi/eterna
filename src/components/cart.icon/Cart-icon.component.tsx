import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import ShoppingIcon from '../../assets/shopping-bag.svg';
import './Cart-icon.styles.scss';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
      <img src={ShoppingIcon} alt='Shopping Cart' className='shopping-icon' />
      <span className='item-count'>{cartCount}</span>
    </div>
  );
};

export default CartIcon;
