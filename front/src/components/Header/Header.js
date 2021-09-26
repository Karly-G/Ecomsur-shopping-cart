import React from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../../assets/logoTS.png';
import cart from '../../assets/cart.png';
import './Header.css';

const Header =()=>{

    let history = useHistory();

    function handleClick() {
        history.push('/shopping-cart');
    }

    return(
        <div className='header'>
            <img src={logo} className="logo" alt="logo" />
            <img src={cart} className="cart" alt="cart" onClick={handleClick}/>
        </div>
    )
}

export default Header;