import React from 'react';
import {Home} from './Components/Home/Home';
import Client from "shopify-buy";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {NavigationBar} from "./Components/Home/NavigationBar";
import {Summer} from "./Components/Products/Summer";
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
            <Route path='/products/summer'>
                <NavigationBar/>
                <Summer/>
            </Route>
            <Route>
                <Home/>
            </Route>

        </Switch>
    </Router>
  );
}

export default App;
