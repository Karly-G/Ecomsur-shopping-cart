import React from 'react';
import logo from '../../assets/logoTS.png';
import cart from '../../assets/cart.png';
import './Header.css';

const Header =()=>{

    return(
        <div className='header'>
            <img src={logo} className="logo" alt="logo" />
            <img src={cart} className="cart" alt="cart" />
        </div>
    )
}

export default Header;