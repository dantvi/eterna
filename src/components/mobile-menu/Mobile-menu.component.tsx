import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/auth.context';
import { auth } from '../../utils/firebase.utils';
import './Mobile-menu.styles.scss';

const MobileMenu = () => {
  const { currentUser } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const signOutHandler = async () => {
    await auth.signOut();
    setMenuOpen(false);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <Menu
      right
      isOpen={menuOpen}
      onStateChange={({ isOpen }) => setMenuOpen(isOpen)}
    >
      {currentUser ? (
        <span className='mobile-user-email'>{currentUser.email}</span>
      ) : null}
      <Link className='menu-item' to={'/'} onClick={closeMenu}>
        HOME
      </Link>
      <Link className='menu-item' to={'/categories'} onClick={closeMenu}>
        CATEGORIES
      </Link>
      <Link className='menu-item' to={'/shop'} onClick={closeMenu}>
        SHOP
      </Link>
      {currentUser ? (
        <Link className='menu-item' to={'/'} onClick={signOutHandler}>
          SIGN OUT
        </Link>
      ) : (
        <Link className='menu-item' to={'/auth'} onClick={closeMenu}>
          SIGN IN
        </Link>
      )}
    </Menu>
  );
};

export default MobileMenu;
