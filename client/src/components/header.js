import React from 'react';

function Header(props) {
    return (
        <header className="App">
          <h1>{props.title}</h1>
          <h2>{props.subtitle}</h2>
        </header>
      );
    }

export default Header;