import React, { useState } from "react";
import Logo from "./logo";
import { NavLink, Link } from "react-router-dom";
import "./navbar.css";


function Navbar(){
 const [menu, setMenu] = useState(true)

  return (
    <div>
      <nav>
        <Logo />
        <ul className={ menu? "navlinks" : "navlinks nav-active navLinkFade"}>
          <li className={menu? "" : "navLinkFade"}>
            <NavLink to="/" activeStyle={activelinkStyle}>
              Home
            </NavLink>
          </li>
          <li className={menu? "" : "navLinkFade"}>
            <NavLink to="/about"  activeStyle={activelinkStyle}>
              About
            </NavLink>
          </li>
          <li className={ menu? "" : "navLinkFade"}>
            <NavLink to="/services" activeStyle={activelinkStyle}>
              Services
            </NavLink>
          </li>
          <li className={ menu? "" : "navLinkFade"}>
            <NavLink to="/gallery" activeStyle={activelinkStyle}>
              Gallery
            </NavLink>
          </li>
          <li className={ menu? "" : "navLinkFade"}>
            <NavLink to="/blog" activeStyle={activelinkStyle}>
              Blog
            </NavLink>
          </li>
          <li className={ menu? "" : "navLinkFade"}>
            <NavLink to="/contact" activeStyle={activelinkStyle}>
              Contact
            </NavLink>
          </li>
          <li className={ menu? "" : "navLinkFade"}>
            <NavLink to="/signin" activeStyle={activelinkStyle}>
              Admin
            </NavLink>
          </li>
        </ul>
        <div className="burger" onClick={()=> setMenu(!menu)}>
          <div className={ menu? 'line1' : "angleline1"}></div>
          <div className={ menu? 'line2' : "noline2"}></div>
          <div className={ menu? 'line3' : "angleline3"}></div>
        </div>
      </nav>
    </div>
  );
};




export default Navbar;







// import React from 'react';
// import Logo from './logo';
// import {NavLink, Link} from 'react-router-dom';

// const navbar = () => {
//   return (
//     <div style={{ background: '#EED6DC', borderBottom:'1px solid', marginTop:'0px', padding:'0px'}}>
//       <nav style={{ listStyle:'none', }}>
//         <Logo />
//         <ul style={{display:'flex',listStyle:'none', justifyContent: 'space-between', width: '1000px', margin: 'auto', marginTop:'10px', fontSize: '1.3rem', textAlign: 'center'}}>
//           <li><NavLink to='/' style={navlinkStyle} activeStyle={activelinkStyle} >Home</NavLink>  <img 
//           src="http://pinkclosets.com/fancyhangerlogo.png"
//           alt="hanger"
//           style={{ width: '35px', height:'25px',  padding: '10px', position: 'relative', top:'10px', left:'5px' }}/> </li> 
//           <li><NavLink to='/about' style={navlinkStyle} activeStyle={activelinkStyle}>About</NavLink><img 
//           src="http://pinkclosets.com/fancyhangerlogo.png"
//           alt="hanger"
//           style={{ width: '35px', height:'25px',  padding: '10px', position: 'relative', top:'10px' }}/></li>
//           <li><NavLink to='/services' style={navlinkStyle} activeStyle={activelinkStyle}>Services</NavLink><img 
//           src="http://pinkclosets.com/fancyhangerlogo.png"
//           alt="hanger"
//           style={{ width: '35px', height:'25px',  padding: '10px', position: 'relative', top:'10px' }}/></li>
//           <li><NavLink to='/gallery' style={navlinkStyle} activeStyle={activelinkStyle}>Gallery</NavLink><img 
//           src="http://pinkclosets.com/fancyhangerlogo.png"
//           alt="hanger"
//           style={{ width: '35px', height:'25px',  padding: '10px', position: 'relative', top:'10px' }}/></li>
//           <li><NavLink to='/blog' style={navlinkStyle} activeStyle={activelinkStyle}>Blog</NavLink><img 
//           src="http://pinkclosets.com/fancyhangerlogo.png"
//           alt="hanger"
//           style={{ width: '35px', height:'25px',  padding: '10px', position: 'relative', top:'10px' }}/></li>
//           <li><NavLink to='/contact' style={navlinkStyle} activeStyle={activelinkStyle}>Contact</NavLink><img 
//           src="http://pinkclosets.com/fancyhangerlogo.png"
//           alt="hanger"
//           style={{ width: '35px', height:'25px',  padding: '10px', position: 'relative', top:'10px' }}/></li>
//           <li><NavLink to='/signin' style={navlinkStyle} activeStyle={activelinkStyle}>Admin</NavLink><img 
//           src="http://pinkclosets.com/fancyhangerlogo.png"
//           alt="hanger"
//           style={{ width: '35px', height:'25px',  padding: '10px', position: 'relative', top:'10px', visibility:'hidden' }}/></li>
//         </ul>
//        </nav>
//     </div>
//   );
// };

// export default navbar;

// const navlinkStyle = {
//   textDecoration: 'none',
//   color: 'black'
// }

const activelinkStyle = {
  fontWeight: 'bold'
}