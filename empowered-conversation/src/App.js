import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Registration from "./components/auth/registration";
import Login from "./components/auth/login";
import Home from "./components/Home";
import MessageConfirm from "./components/MessageConfirm";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Registration} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/confirmed" component={MessageConfirm} />
      </Switch>
    </Router>
  );
}

export default App;
