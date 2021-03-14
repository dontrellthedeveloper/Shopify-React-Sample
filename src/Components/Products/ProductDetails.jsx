import React, {useState, useEffect} from 'react';
import Client from 'shopify-buy';
import {useParams} from 'react-router-dom';
import '../../Styles/ProductDetails.css'

const client = Client.buildClient({
    domain: 'codeinspire-dontrell.myshopify.com',
    storefrontAccessToken: process.env.REACT_APP_ShopifyApiKey
});


export const ProductDetails = () => {
    const cart_id = localStorage.getItem('cart_id'); // ID of an existing checkout
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    const [qty, setQty] = useState(1);

    const AddToCart = () => {

        const lineItemsToAdd = [
            {
                variantId: product.variants[0].id,
                quantity: qty
            }

        ];

        // Add an item to the checkout
        client.checkout.addLineItems(cart_id, lineItemsToAdd).then((checkout) => {
            // Do something with the updated checkout
            console.log(checkout.lineItems); // Array with one additional line item
        });
    };

    console.log(id);
    useEffect(() => {
        client.product.fetch(id).then(product=>{
            console.log(product);
            setProduct(product);
        }).catch(error=>{
            console.log(error);
        })
    }, []);

    if(product === null) {
        return <h1>Loading...</h1>;
    } else {
        return(
            <div className='ProductDetails'>
                <div className='ProductDetails-left'>
                    <div className='ProductDetails-lImage'>
                        <img width='400px' src={product.images[0].src}/>
                    </div>
                    <div className='ProductDetails-lName'>
                        <h4>{product.handle}</h4>
                    </div>
                </div>

                <div className='ProductDetails-right'>
                    <h2>Product Summary</h2>
                    <h4>{`Price: $${product.variants[0].price}`}</h4>
                    Qty
                    <select className='Qty' onChange={e=>setQty(e.target.value)}>
                        <option>...</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                    </select>
                    <button className='btn' onClick={AddToCart}>Add To Cart</button>
                </div>
            </div>
        )
    }

};




// const checkoutId = 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTgyMTc3ODc1OTI='; // ID of an existing checkout
// const lineItemsToAdd = [
//     {
//         variantId: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8yOTEwNjAyMjc5Mg==',
//         quantity: 5,
//         customAttributes: [{key: "MyKey", value: "MyValue"}]
//     }
// ];
//
// // Add an item to the checkout
// client.checkout.addLineItems(checkoutId, lineItemsToAdd).then((checkout) => {
//     // Do something with the updated checkout
//     console.log(checkout.lineItems); // Array with one additional line item
// });