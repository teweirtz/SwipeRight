import React from 'react';
import './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import {IconButton} from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';
// import logo from './Tinder_logo_PNG6.png'

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon  fontSize="large" className="header__icon"/>
      </IconButton>
        <img className="header__logo" src="https://1000logos.net/wp-content/uploads/2019/06/tinder-logo.jpg" alt="Tinder logo"/>
      <IconButton>
        <ForumIcon fontSize="large" className="header__icon"/>
      </IconButton>
    </div>
  );
}

export default Header;