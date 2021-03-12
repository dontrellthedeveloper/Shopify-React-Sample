import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import {Avatar} from "@material-ui/core";
import '../../Styles/NavigationBar.css';


export const NavigationBar = () => {
  return(
      <nav className='nav'>
          <div className='nav-top'>
              <div className='nav-top-left'>
                  <LanguageIcon/>
                  <h4 className='nav-tleft-link'>English / Spanish</h4>
              </div>
              <div className='nav-top-right'>
                  <HelpOutlineIcon className='nav-tright-icon'/>
                  <h4 className='nav-tright-link'>Customer Support</h4>
              </div>
          </div>
          <div className='nav-bottom'>
              <div className='nav-bottom-left'>
                  <div className='nav-bleft-companyname'>
                      <h2>Bushes Boutique</h2>
                  </div>
                  <div className='nav-bleft-clothescategories'>
                      <h4 className='nav-bleft-links'>Hoodies</h4>
                      <h4 className='nav-bleft-links'>Jeans</h4>
                      <h4 className='nav-bleft-links'>Sneakers</h4>
                  </div>
              </div>
              <div className='nav-bottom-right'>
                  <div className='nav-bright-search'>
                      <SearchIcon/>
                      <h4 className='nav-bright-searchText'>Search</h4>
                  </div>
                 <h4 className='nav-bright-link'>|</h4>
                  <FavoriteBorderIcon className='nav-bright-icons'/>
                  <ShoppingCartIcon className='nav-bright-icons'/>
                  <Avatar src='' alt='' className='nav-bright-icons' />
              </div>
          </div>
      </nav>
  )
};

