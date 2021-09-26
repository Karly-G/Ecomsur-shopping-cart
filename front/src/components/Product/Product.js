import React from 'react';
import { useHistory } from 'react-router-dom';
import addProduct from '../../assets/add-product.png';
import './Product.css';

const Product =({response = []})=>{

    let history = useHistory();

    function handleClick() {
        history.push('/one-product');
    }

    return(
        <div className="all-products" >
        {response.map((item, index) => (
        <div key={index} className='card'>
            <div className="card-header">
                <h4>{item.name}</h4>
                <p>${item.price} </p>
            </div>
            <div className="card-body">
                <img  className="img-product" src={item.image} alt="imagen"/>
            </div>
            <div className="card-action" >
                <img src={addProduct} alt="add" className="add-product"/>
                <button className="btn-description" onClick={handleClick}>Descripción</button>
            </div>
        </div>
        ))}
        </div>
    )
}

export default Product;

