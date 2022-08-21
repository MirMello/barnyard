import React from 'react';

export default function Navbar(){
    return(
        <nav className= "navbar">
          <h1>Barnyard</h1>
        <ul style={{ display: 'flex', listStyle: 'none' }}>
          <li><a href='/login'><button type="button">Login</button></a></li>
          <li><a href='/signup'><button type="button">Sign Up</button></a></li>
          <li><a href='/barns'><button type="button">Barns</button></a></li>
        </ul>
      </nav>
    )
};