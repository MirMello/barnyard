import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// import logo from './logo.svg';
// import animals from './components/animals';
// import Events from './components/Events';
// import pictures from './components/pictures';
// import Post from './components/Post';
import Barns from './pages/barns';
import Stalls from './pages/stalls';
import Addanimal from './pages/Addanimal';
import Login from './pages/Login';
import Signup from './pages/Signup';

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
    </ApolloProvider>
  );
}

export default App;
