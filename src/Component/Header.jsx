import React from 'react';
import logo from '../images/logo.png';

function Header() {
  return (
    <>
      <div className='logo'>
        <img src={logo} alt='Learn with Sumit' />
      </div>
      <h1 id='header' className='header'>
        To-Do App
      </h1>
    </>
  );
}

export default Header;
