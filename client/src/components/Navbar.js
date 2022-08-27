import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>BarnYard</h1>
      <ul style={{ display: 'flex', listStyle: 'none' }}>
        <li><a href='/login'><button type="button">Login</button></a></li>
        <li><a href='/signup'><button type="button">Sign Up</button></a></li>
        <li><a href='/barns'><button type="button">Barns</button></a></li>
      </ul>
    </nav>
  )
};

<<<<<<< HEAD
export default Navbar;
=======
export default Navbar;

        // <button onClick={() => setcurrentPage("Login")} type="login-button">Login</button>
        // <button onClick={() => setcurrentPage("Signup")} type="sign-up-button">Sign Up</button>
>>>>>>> 267aeaa5a83ab1a9996df49e9fe1d985eb2eea2d
