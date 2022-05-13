import React from "react";
import Header from "./Header";
import CardControl from "./CardControl"
import Signin from "./Signin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/">
      <CardControl />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;