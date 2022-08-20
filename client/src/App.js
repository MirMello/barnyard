import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
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

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  
  return (
    <ApolloProvider client={client}>
    {/* <div>
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
    </div> */}
    <Router>
    <nav>
        <ul style={{ display: 'flex', listStyle: 'none' }}>
          <li id='title'>Barnyard</li>
          <a href='/login'><button type="button">Login</button></a>
          <a href='/signup'><button type="button">Sign Up</button></a>
        </ul>
      </nav>
      <Routes>
        <Route path='/stalls' element={<Stalls />}/>
        <Route path='/addanimal' element={<Addanimal />}/>        
        <Route path='/barns' element={<Barns />}/> 
        <Route path='/login' element={<Login />}/> 
        <Route path='/signup' element={<Signup />}/> 
      </Routes>
    </Router>
    </ApolloProvider>
  );
}

export default App;