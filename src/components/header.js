import React from 'react';
import Search from './search';
import Cart from './cart';
import '../styles/header.scss';

const Header = () => {
  return (
    <div className='header'>
      <div className="padding-icon">
        <Cart />
        <Search />
      </div>
    </div>
  );
}

export default Header;