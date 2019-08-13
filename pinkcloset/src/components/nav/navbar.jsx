import React from 'react';
import Logo from './logo';
import {NavLink, Link} from 'react-router-dom';

const navbar = () => {
  return (
    <div style={{ background: '#EED6DC'}}>
      <nav style={{ listStyle:'none', }}>
        <Logo/>
        <ul style={{display:'flex',listStyle:'none', justifyContent: 'space-between', width: '700px', margin: 'auto' }}>
          <li><NavLink to='/' style={navlinkStyle} activeStyle={activelinkStyle} >Home</NavLink></li>
          <li><NavLink to='/about' style={navlinkStyle} activeStyle={activelinkStyle}>About</NavLink></li>
          <li><NavLink to='/services' style={navlinkStyle} activeStyle={activelinkStyle}>Services</NavLink></li>
          <li><NavLink to='/gallery' style={navlinkStyle} activeStyle={activelinkStyle}>Gallery</NavLink></li>
          <li><NavLink to='/blog' style={navlinkStyle} activeStyle={activelinkStyle}>Blog</NavLink></li>
          <li><NavLink to='/contact' style={navlinkStyle} activeStyle={activelinkStyle}>Contact</NavLink></li>
          <li><NavLink to='/signin' style={navlinkStyle} activeStyle={activelinkStyle}>Admin</NavLink></li>
        </ul>
       </nav>
    </div>
  );
};

export default navbar;

const navlinkStyle = {
  textDecoration: 'none',
  color: 'black'
}

const activelinkStyle = {
  fontWeight: 'bold'
}