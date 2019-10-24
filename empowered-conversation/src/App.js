import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./utils/PrivateRoute";
import Registration from "./components/auth/registration";
import Login from "./components/auth/login";
import Home from "./components/Home";
import MessageConfirm from "./components/MessageConfirm";
import DemoApp from "./components/demo-component/DemoApp"

function App(props) {
  console.log(`from app`, props.state);
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Registration} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/home" component={Home} />
        <Route exact path="/confirmed" component={MessageConfirm} />
        <Route exact path="/demo" component={DemoApp} />
      </Switch>
    </Router>
  );
}

const mapStateToProps = state => {
  return {
    state: state
  };
};

export default connect(
  mapStateToProps,
  {}
)(App);
