import React, {useState, useEffect} from 'react';
import Client from 'shopify-buy';

const client = Client.buildClient({
    domain: 'codeinspire-dontrell.myshopify.com',
    storefrontAccessToken: process.env.REACT_APP_ShopifyApiKey
});

// // Fetch a single product by ID
// const productId = 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc4NTc5ODkzODQ=';
//
// client.product.fetch(productId).then((product) => {
//     // Do something with the product
//     console.log(product);
// });

export const ProductDetails = () => {
return(
    <div>
        My Component
    </div>
)
};