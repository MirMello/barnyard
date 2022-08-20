import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import logo from './logo.svg';
// import animals from './components/animals';
// import Events from './components/Events';
// import pictures from './components/pictures';
// import Post from './components/Post';
import Barns from "./pages/Barns";
import Stalls from "./pages/Stalls";
import Addanimal from "./pages/Addanimal";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NavBar from "./components/Navbar";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/stalls" element={<Stalls />} />
          <Route path="/addanimal" element={<Addanimal />} />
          <Route path="/barns" element={<Barns />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
