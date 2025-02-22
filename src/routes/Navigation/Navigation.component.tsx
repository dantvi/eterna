import { Outlet, Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { AuthContext } from '../../contexts/auth.context';
import { auth } from '../../utils/firebase.utils';
import diamondLogo from '../../assets/icon-diamond.png';
import CartIcon from '../../components/cart.icon/Cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/Cart-dropdown.component';
import MobileMenu from '../../components/mobile-menu/Mobile-menu.component';
import './Navigation.styles.scss';

const Navigation = () => {
  const { isCartOpen } = useContext(CartContext);
  const { currentUser } = useContext(AuthContext);

  const signOutHandler = async () => {
    await auth.signOut();
  };

  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to={'/'} title='Go to home'>
          <img src={diamondLogo} alt='Eterna logo' className='logo' />
        </Link>
        <div className='nav-links-container'>
          {currentUser ? (
            <span className='current-user-email'>{currentUser.email}</span>
          ) : null}
          <Link
            className='nav-link'
            to={'/categories'}
            title='Go to categories'
          >
            CATEGORIES
          </Link>
          <Link className='nav-link' to={'/shop'} title='Go to shop'>
            SHOP
          </Link>
          {currentUser ? (
            <Link
              className='nav-link'
              to={'/'}
              title='Go to landing page'
              onClick={signOutHandler}
            >
              SIGN OUT
            </Link>
          ) : (
            <Link className='nav-link' to={'/auth'} title='Go to sign in page'>
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>

        <div className='nav-right-container'>
          <div className='mobile-menu'>
            <MobileMenu />
          </div>
          <CartIcon />
        </div>

        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
