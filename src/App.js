import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;

function App() {
  return (
    <Router>
      <h1>HEADER</h1>
      <Link to="/">Home</Link>
      <br />
      <Link to="/about">About</Link>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <h1>FOOTER</h1>
    </Router>
  );
}

export default App;
