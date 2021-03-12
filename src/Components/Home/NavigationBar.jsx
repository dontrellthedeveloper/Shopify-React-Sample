import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import {Avatar} from "@material-ui/core";


export const NavigationBar = () => {
  return(
      <nav className='nav'>
          <div className='nav-top'>
              <div className='nav-top-left'>
                  <LanguageIcon/>
                  <h4>English / Spanish</h4>
              </div>
              <div className='nav-top-right'>
                  <HelpOutlineIcon/>
                  <h4>Customer Support</h4>
              </div>
          </div>
          <div className='nav-bottom'>
              <div className='nav-bottom-left'>
                  <div className='nav-bleft-companyname'>
                      <h2>Taylor Botique</h2>
                  </div>
                  <div className='nav-bleft-clothescategories'>
                      <h4>Hoodies</h4>
                      <h4>Jeans</h4>
                      <h4>Sneakers</h4>
                  </div>
              </div>
              <div className='nav-bottom-right'>
                  <div className='nav-bright-search'>
                      <SearchIcon/>
                      <h2>Search</h2>
                  </div>
                 <h4></h4>
                  <FavoriteBorderIcon/>
                  <ShoppingCartIcon/>
                  <Avatar src='' alt='' />
              </div>
          </div>
      </nav>
  )
};

