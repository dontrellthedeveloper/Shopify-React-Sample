import React from 'react';
import {NavigationBar} from "./NavigationBar";
import {Banner} from './Banner';

export const Home = () => {
    return(
        <div className='NavigationBar'>
            <NavigationBar/>
            <Banner/>
        </div>
    )
};

