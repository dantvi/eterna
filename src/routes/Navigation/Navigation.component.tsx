import { Outlet, Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import diamondLogo from '../../assets/icon-diamond.png';
import CartIcon from '../../components/cart.icon/Cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/Cart-dropdown.component';
import './Navigation.styles.scss';

const Navigation = () => {
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to={'/'} title='Go to home'>
          <img src={diamondLogo} alt='Eterna logo' className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to={'/shop'} title='Go to shop'>
            SHOP
          </Link>
          <Link className='nav-link' to={'/auth'} title='Go to sign in page'>
            SIGN IN
          </Link>
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
