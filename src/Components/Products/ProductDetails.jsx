import React, {useState, useEffect} from 'react';
import Client from 'shopify-buy';
import {useParams} from 'react-router-dom';
import '../../Styles/ProductDetails.css'

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
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    const [qty, setQty] = useState(1);

    const AddToCart = () => {
        alert(qty);
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