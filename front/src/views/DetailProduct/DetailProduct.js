import React from 'react';
import './DetailProduct.css';
import { useHistory } from 'react-router-dom'
import stars from '../../assets/stars.png';
import back from '../../assets/back.png';
import addProduct from '../../assets/add-product.png';

const DetailProduct =()=>{

    let history = useHistory();

    function handleClick() {
        history.push('/');
    }

    return(
        <>
            <div className="card-product">
                <h1 className="name-product">Cannon EOS 80D DSLR Camera</h1>
            <div className='one-product'>
                <div>
                    <img className="img-one-product" src="https://raw.githubusercontent.com/Karly-G/Ecomsur-shopping-cart/main/backend/public/images/camera.jpg" alt="imagen" />
                </div>
                <div className="detail-product" >
                    <p><b>Descripción: </b>Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design</p>
                    <p><b>Marca: </b>Canon</p>
                    <p><b>Categoría: </b>Electronics</p>
                    <h3>$ 929.99</h3>
                    <p><b>Calificación:</b> <img className="stars" src={stars} alt="calificación"/> 3/5</p>
                    <img src={addProduct} alt="add" className="add-product"/>
                </div>
            </div>
            <img className='back' onClick={handleClick} src={back} alt="volver" />
            </div>
    </>
    )
}

export default DetailProduct;
