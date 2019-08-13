import React from 'react';
import Logo from './logo';
import {NavLink, Link} from 'react-router-dom';

const navbar = () => {
  return (
    <div style={{ background: '#EED6DC', borderBottom:'1px solid'}}>
      <nav style={{ listStyle:'none', }}>
        <Logo />
        <ul style={{display:'flex',listStyle:'none', justifyContent: 'space-between', width: '1000px', margin: 'auto', marginTop:'10px', fontSize: '1.3rem', textAlign: 'center'}}>
          <li><NavLink to='/' style={navlinkStyle} activeStyle={activelinkStyle} >Home</NavLink>  <img 
          src="http://pinkclosets.com/fancyhangerlogo.png"
          alt="hanger"
          style={{ width: '35px', height:'25px',  padding: '10px', position: 'relative', top:'10px', left:'5px' }}/> </li> 
          <li><NavLink to='/about' style={navlinkStyle} activeStyle={activelinkStyle}>About</NavLink><img 
          src="http://pinkclosets.com/fancyhangerlogo.png"
          alt="hanger"
          style={{ width: '35px', height:'25px',  padding: '10px', position: 'relative', top:'10px' }}/></li>
          <li><NavLink to='/services' style={navlinkStyle} activeStyle={activelinkStyle}>Services</NavLink><img 
          src="http://pinkclosets.com/fancyhangerlogo.png"
          alt="hanger"
          style={{ width: '35px', height:'25px',  padding: '10px', position: 'relative', top:'10px' }}/></li>
          <li><NavLink to='/gallery' style={navlinkStyle} activeStyle={activelinkStyle}>Gallery</NavLink><img 
          src="http://pinkclosets.com/fancyhangerlogo.png"
          alt="hanger"
          style={{ width: '35px', height:'25px',  padding: '10px', position: 'relative', top:'10px' }}/></li>
          <li><NavLink to='/blog' style={navlinkStyle} activeStyle={activelinkStyle}>Blog</NavLink><img 
          src="http://pinkclosets.com/fancyhangerlogo.png"
          alt="hanger"
          style={{ width: '35px', height:'25px',  padding: '10px', position: 'relative', top:'10px' }}/></li>
          <li><NavLink to='/contact' style={navlinkStyle} activeStyle={activelinkStyle}>Contact</NavLink><img 
          src="http://pinkclosets.com/fancyhangerlogo.png"
          alt="hanger"
          style={{ width: '35px', height:'25px',  padding: '10px', position: 'relative', top:'10px' }}/></li>
          <li><NavLink to='/signin' style={navlinkStyle} activeStyle={activelinkStyle}>Admin</NavLink><img 
          src="http://pinkclosets.com/fancyhangerlogo.png"
          alt="hanger"
          style={{ width: '35px', height:'25px',  padding: '10px', position: 'relative', top:'10px', visibility:'hidden' }}/></li>
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