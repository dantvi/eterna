import { Outlet, Link } from 'react-router-dom';

import diamondLogo from '../../assets/icon-diamond.png';

import './Navigation.styles.scss';

const Navigation = () => {
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
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
