import React from 'react';
import {Home} from './Components/Home/Home';

// const client = Client.buildClient({
//   domain: 'codeinspire-dontrell.myshopify.com',
//   storefrontAccessToken: process.env.REACT_APP_ShopifyApiKey
// });

function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
