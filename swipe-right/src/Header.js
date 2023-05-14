import React from 'react';
import './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import {IconButton} from '@mui/material';

function Header() {
  return (
    <div className="Header">
      <IconButton>
        <PersonIcon  fontSize="large" className="header_icon"/>
      </IconButton>

      <img
        className="header_logo"
        src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
        alt=""
        />
    </div>
  )
}

export default Header;