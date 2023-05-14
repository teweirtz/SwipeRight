import React from 'react';
import './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import {IconButton} from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';
import logo from './Tinder_logo_PNG6.png'

function Header() {
  return (
    <div className="Header">
      <IconButton>
        <PersonIcon  fontSize="large" className="header_icon"/>
      </IconButton>

      {/* <img
        className="header__logo"
        img src= {logo}
        alt=""
      /> */}

    <IconButton>
      <ForumIcon fontSize="large" className="header_icon"/>
    </IconButton>
    </div>
  );
}

export default Header;