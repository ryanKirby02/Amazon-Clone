import './Nav.css';

//icons
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Nav = () => {
  return (
    <div className='nav'>
      <img
        className='nav-logo'
        src='https://www.pinclipart.com/picdir/big/358-3584545_amazon-web-services-logo-png-transparent-svg-vector.png'
        alt='logo'
      />
      <div className='nav-searchbar'>
        <input type='text' className='nav-search-input' />
        <SearchIcon className='nav-search-icon' />
      </div>
      <div className='nav-links'>
        <div className='nav-link'>
          <span className='nav-link-line-one'>Hello</span>
          <span className='nav-link-line-two'>Sign in</span>
        </div>
        <div className='nav-link'>
          <span className='nav-link-line-one'>Returns</span>
          <span className='nav-link-line-two'>& Orders</span>
        </div>
        <div className='nav-link'>
          <span className='nav-link-line-one'>Your</span>
          <span className='nav-link-line-two'>Prime</span>
        </div>
        <div className="nav-cart-link">
            <ShoppingCartIcon className='cart-icon' />
            <span className='nav-link-line-two nav-cart-count'>0</span>
        </div>
      </div>
    </div>
  );
};

export default Nav;
