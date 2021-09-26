import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import Header from './components/Header/Header.js'
import './App.css';
import Product from './components/Product/Product.js';
import DetailProduct from './views/DetailProduct/DetailProduct.js';

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

    const handleSaveData = (descriptionArt) => {
      setSaveData({...saveData, dataSaved:[ descriptionArt]});
    }
  

  return (
    <>
      <Header />
      <Product  response={response}/>
      <DetailProduct/>
    {/* <Router>
      <Switch>
        <Route path="/" exact>
          <Home 
            data={response}
            saveData={saveData}
            setSaveData={setSaveData}
            handleSaveData={handleSaveData}
          />
        </Route>
        <Route path="/item">
          <Item 
            data={response}
            saveData={saveData}
          />
        </Route>
      </Switch>
  </Router> */}
  </>
  )
}

export default App;
