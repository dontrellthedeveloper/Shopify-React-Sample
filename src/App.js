import React from 'react';
import {Home} from './Components/Home/Home';
import Client from "shopify-buy";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {NavigationBar} from "./Components/Home/NavigationBar";
import {Summer} from "./Components/Products/Summer";
import {Jackets} from "./Components/Products/Jackets";
import {Tops} from "./Components/Products/Tops";
import './App.css';

const client = Client.buildClient({
  domain: 'codeinspire-dontrell.myshopify.com',
  storefrontAccessToken: process.env.REACT_APP_ShopifyApiKey
});

// SummerID=Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI2MjAxMDgzMTAzNA==
// JacketID=Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI2MjAxMzAyNjQ5MA==
// TopID=Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI2MjAxMzEyNDc5NA==
function App() {


  return (
    <Router>
        <Switch>
            <Route exact path='/'>
                <Home/>
            </Route>
            <Route exact path='/products/summer'>
                <NavigationBar/>
                <Summer/>
            </Route>
            <Route exact path='/products/jackets'>
                <NavigationBar/>
                <Jackets/>
            </Route>
            <Route exact path='/products/tops'>
                <NavigationBar/>
                <Tops/>
            </Route>


        </Switch>
    </Router>
  );
}

export default App;
