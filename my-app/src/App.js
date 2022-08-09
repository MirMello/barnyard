import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import animals from './components/animals';
import events from './components/events';
import pictures from './components/pictures';
import post from './components/Post';
import Barns from './pages/barns';
import Stalls from './pages/stalls';

function App() {
  const [currentPage, setcurrentPage] = useState('Barnyard')
  return (
    <div>
      <nav>
        <ul style={{ display: 'flex', listStyle: 'none' }}>
          <li id='title'>Barnyard</li>
          <button type="login-button">Login</button>
          <button type="sign-up-button">Sign Up</button>
        </ul>
      </nav>
      {currentPage === "Stalls" ? <Stalls />
        : <Barns />}
    </div>
  );
}

export default App;
