import React from 'react';
import Logo from './logo'

const navbar = () => {
  return (
    <div>
      <nav style={{ background: '#EED6DC' }}>
        <Logo/>
        <ul style={{display:'flex',listStyle:'none', justifyContent:'center', }}>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Gallery</li>
          <li>Blog</li>
          <li>contact</li>
        </ul>
       </nav>
    </div>
  );
};

export default navbar;
