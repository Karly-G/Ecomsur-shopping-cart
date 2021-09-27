import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import Header from './components/Header/Header.js'
import Product from './components/Product/Product.js';
import DetailProduct from './views/DetailProduct/DetailProduct.js';
import ShoppingCart from './views/ShoppingCart/ShoppingCart.js';
import './App.css';

const App = () => {
  // store response from server
  const [response, setResponse] = useState([]);
  const [saveData, setSaveData] = useState({
    dataSaved:[],
  });

  // call server to see if its running
  useEffect(() => {
    const getApiResponse = () => {
      fetch('http://localhost:5000/api/products/')
        .then((res) => res.json())
        .then((res) => setResponse(res))
    }
    getApiResponse()
  }, [])

    const handleSaveData = (description) => {
      setSaveData({...saveData, dataSaved:[description]});
    }
  

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact>
            <Product  response={response} handleSaveData={handleSaveData} />
          </Route>
        </Switch>
        <Switch>
          <Route path="/one-product" exact>
            <DetailProduct  handleSaveData={handleSaveData} saveData={saveData} />
          </Route>
        </Switch>
        <Switch>
          <Route path="/shopping-cart" exact>
            <ShoppingCart/>
          </Route>
        </Switch>
      </Router>  
  </>
  )
}

export default App;