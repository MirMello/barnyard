import './App.css';
import { useState } from 'react';
// import logo from './logo.svg';
// import animals from './components/animals';
// import Events from './components/Events';
// import pictures from './components/pictures';
// import Post from './components/Post';
import Barns from './pages/Barns';
import Stalls from './pages/Stalls';
import Addanimal from './pages/Addanimal';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  const [currentPage, setcurrentPage] = useState('Barns')
  return (
    <div>
      <nav>
        <ul style={{ display: 'flex', listStyle: 'none' }}>
          <li id='title'>Barnyard</li>
          <button onClick = {()=>setcurrentPage("Login")}type="login-button">Login</button>
          <button onClick = {()=>setcurrentPage("Signup")}type="sign-up-button">Sign Up</button>
        </ul>
      </nav>
      {currentPage === "Stalls" && <Stalls />}
       {currentPage === "Addanimal" && <Addanimal setcurrentPage={setcurrentPage}/>}
         {currentPage === "Barns" && <Barns setcurrentPage={setcurrentPage}/>}
         {currentPage === "Login" && <Login setcurrentPage={setcurrentPage}/>}
         {currentPage === "Signup" && <Signup setcurrentPage={setcurrentPage}/>}
    </div>
  );
}

export default App;
