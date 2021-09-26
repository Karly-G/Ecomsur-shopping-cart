import React from 'react';
import './Product.css';
import addProduct from '../../assets/add-product.png';

const Product =({response = []})=>{

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
                <button className="btn-description">Descripción</button>
            </div>
        </div>
        ))}
        </div>
    )
}

export default Product;

