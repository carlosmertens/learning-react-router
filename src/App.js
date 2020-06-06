import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Home from "./Home";
import Help from "./Help";

const Host = () => <h1>Host</h1>;
const SignUp = () => <h1>Sign Up</h1>;
const Login = () => <h1>Log In</h1>;

function App() {
  return (
    <Router>
      {/* In order to get the props from React Router, Component must be in a Route */}
      {/* <Navbar/> */}
      <Route path="/" component={Navbar} />

      {/* When we use the render method in Route the props are called manually */}
      <Route
        exact
        path="/"
        render={(props) => {
          return (
            <Home
              title="Welcome Home!"
              history={props.history}
              match={props.match}
            />
          );
        }}
      />
      <Route exact path="/host" component={Host} />
      <Route path="/help" component={Help} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/login" component={Login} />
    </Router>
  );
}

export default App;
