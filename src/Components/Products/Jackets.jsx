import React, {useEffect, useState} from 'react';
import Client from "shopify-buy";
import '../../Styles/Products.css';
import {Link} from "react-router-dom";
// SummerID=Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI2MjAxMzAyNjQ5MA==


const client = Client.buildClient({
    domain: 'codeinspire-dontrell.myshopify.com',
    storefrontAccessToken: process.env.REACT_APP_ShopifyApiKey
});

export const Jackets = () => {

    const collectionID = 'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI2MjAxMzAyNjQ5MA==';
    const [products, setProducts] = useState(null);

    useEffect(() => {
        client.collection.fetchWithProducts(collectionID).then(res=> {
            // console.log(res.products);
            setProducts(res.products);
        }).catch(err=>{
            console.log(err);
        })
    }, []);

    if(products === null) {
        return <h3>Fetching all summer collection...</h3>
    } else {
        return(
            <div className='Products'>
                {
                    products.map(product=>{
                        return(
                            <div className='products_details' key={product.id}>
                                <Link
                                    to={`/product-details/${product.id}`}
                                    className='Router__link'
                                >
                                    <div className='products_image'>
                                        <img width='200px' src={product.images[0].src}/>
                                    </div>
                                </Link>
                                <div className='products__info'>
                                    <h4>{product.handle}</h4>
                                    <h4>{product.variants[0].price}</h4>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
};