import React, {useEffect} from 'react';
import {NavigationBar} from "./NavigationBar";
import {Banner} from './Banner';

export const Home = () => {

    useEffect(() => {
        // Fetch all collections, including their products
        // client.collection.fetchAllWithProducts().then((collections) => {
        //     // Do something with the collections
        //     console.log(collections);
        //     console.log(collections[0].products);
        // });
    });

    return(
        <div className='NavigationBar'>
            <NavigationBar/>
            <Banner/>
        </div>
    )
};

