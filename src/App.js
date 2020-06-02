import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Home from "./Home";

const Host = () => <h1>Host</h1>;
const Help = () => <h1>Help</h1>;
const SignUp = () => <h1>Sign Up</h1>;
const Login = () => <h1>Log In</h1>;

function App() {
  return (
    <Router>
      <Navbar />
      <Route
        exact
        path="/"
        render={() => {
          return <Home title="Welcome Home!" />;
        }}
      />
      <Route exact path="/host" component={Host} />
      <Route exact path="/help" component={Help} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/login" component={Login} />
    </Router>
  );
}

export default App;
