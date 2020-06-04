import React from "react";
import { Route, Link } from "react-router-dom";

const HelpCustomer = () => <h3>Help Customer</h3>;
const HelpHost = () => <h3>Help Host</h3>;

function Help() {
  return (
    <div>
      <h1>Need help?</h1>
      <div>
        <Link to="/help/customer">I am a customer</Link> |
        <Link to="/help/host">I am a host</Link>
      </div>

      <Route path="/help/customer" component={HelpCustomer} />
      <Route path="/help/host" component={HelpHost} />
    </div>
  );
}

export default Help;
