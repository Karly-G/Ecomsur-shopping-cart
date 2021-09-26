import React from 'react';
import './DetailProduct.css';
import stars from '../../assets/stars.png';
import back from '../../assets/back.png';

const DetailProduct =()=>{

    return(
        <>
            <div className="card-product">
                <h1 className="name-product" >Nombre del Producto</h1>
            <div className='one-product'>
                <div>
                    <img className="img-one-product" src="https://raw.githubusercontent.com/Karly-G/Ecomsur-shopping-cart/main/backend/public/images/camera.jpg" alt="imagen" />
                </div>
                <div className="detail-product" >
                    <p><b>Descripción: </b>Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design</p>
                    <p><b>Marca: </b>Canon</p>
                    <h3>$ 500</h3>
                    <div className="star-back">
                        <p><b>Calificación:</b> <img className="stars" src={stars} alt="calificación"/> 3/5</p>
                        <img className='back' src={back} alt="volver" />
                    </div>
                </div>
            </div>
            </div>
    </>

        // <div className='one-product'>
        //     <div className="img-one-product">
        //         <img  className="img-product" src={props.item.image} alt="imagen"/>
        //     </div>
        //     <div className="detail-product" >
        //         <h1>{props.item.name}</h1>
        //         <p>Descrpción: {props.item.description}</p>
        //         <p>Marca:{props.item.brand} </p>
        //         <h2>${props.item.price}</h2>
        //         <p>Calificación: <img src={stars} alt="calificación" /> {props.item.rating}/5</p>
        //     </div>
        // </div>
    )
}

export default DetailProduct;
