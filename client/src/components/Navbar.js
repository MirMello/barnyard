import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>BarnYard</h1>
      <ul>
        <li><a href='/login'><button type="button">Login</button></a></li>
        <li><a href='/signup'><button type="button">Sign Up</button></a></li>
        <li><a href='/barns'><button type="button">Barns</button></a></li>
      </ul>
    </nav>
  )
};

export default Navbar;