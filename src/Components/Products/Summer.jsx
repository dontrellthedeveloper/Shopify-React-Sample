import React, {useEffect, useState} from 'react';
import Client from "shopify-buy";
import '../../Styles/Products.css';
// SummerID=Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI2MjAxMDgzMTAzNA==


const client = Client.buildClient({
    domain: 'codeinspire-dontrell.myshopify.com',
    storefrontAccessToken: process.env.REACT_APP_ShopifyApiKey
});

export const Summer = () => {

    const collectionID = 'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI2MjAxMDgzMTAzNA==';
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
                            <div className='products_details'>
                                <div className='products_image'>
                                    <img src={product.images[0].src}/>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
};