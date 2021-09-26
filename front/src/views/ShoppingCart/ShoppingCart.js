import React from 'react';
import { useHistory } from 'react-router-dom'
// import stars from '../../assets/stars.png';
import back from '../../assets/back.png';
// import addProduct from '../../assets/add-product.png';
import './ShoppingCart.css';

const ShoppingCart =()=>{

    let history = useHistory();

    function handleClick() {
        history.push('/');
    }
    

    return(
        <>
            <div className="shop-cart">
                <div className="cart-header" >
                    <h1>Carrito de compras</h1>
                </div>
                <div className="cart-body">

                </div>
                <img className='back' onClick={handleClick} src={back} alt="volver" />
            </div>
        </>
    )
}

export default ShoppingCart;
