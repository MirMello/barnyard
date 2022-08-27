import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import React from 'react';
import logo from './logo.svg';
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
import NavBar from "./components/Navbar";

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  const [currentPage, setcurrentPage] = useState('Barns')
  return (
    <ApolloProvider client={client}>
    <div>
      <nav className='navbar'>
      <h1 id='title'>Barnyard</h1>
        <ul style={{ display: 'flex', listStyle: 'none' }}>
          <button className='navbar-button' onClick = {()=>setcurrentPage("Login")}type="login-button">Login</button>
          <button className='navbar-button' onClick = {()=>setcurrentPage("Signup")}type="sign-up-button">Sign Up</button>
          <button className='navbar-button' onClick = {()=>setcurrentPage("Barns")}type="barns-button">Barns</button>
        </ul>
      </nav>
      {currentPage === "Stalls" && <Stalls />}
       {currentPage === "Addanimal" && <Addanimal setcurrentPage={setcurrentPage}/>}
         {currentPage === "Barns" && <Barns setcurrentPage={setcurrentPage}/>}
         {currentPage === "Login" && <Login setcurrentPage={setcurrentPage}/>}
         {currentPage === "Signup" && <Signup setcurrentPage={setcurrentPage}/>}
    </div>
    </ApolloProvider>
  );
}

export default App;

// import {
//   ApolloProvider,
//   ApolloClient,
//   InMemoryCache,
//   createHttpLink,
// } from "@apollo/client";
// import logo from "./logo.svg";
// import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import logo from './logo.svg';
// // import animals from './components/animals';
// // import Events from './components/Events';
// // import pictures from './components/pictures';
// // import Post from './components/Post';
// import Barns from "./pages/Barns";
// import Stalls from "./pages/Stalls";
// import Addanimal from "./pages/Addanimal";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import NavBar from "./components/Navbar";

// const httpLink = createHttpLink({
//   uri: "/graphql",
// });

// const client = new ApolloClient({
//   link: httpLink,
//   cache: new InMemoryCache(),
// });

// function App() {
//   return (
//     <ApolloProvider client={client}>
//       <Router>
//         <NavBar />
//         <Routes>
//           <Route path="/stalls" element={<Stalls />} />
//           <Route path="/addanimal" element={<Addanimal />} />
//           <Route path="/barns" element={<Barns />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//         </Routes>
//       </Router>
//     </ApolloProvider>
//   );
// }

// export default App;