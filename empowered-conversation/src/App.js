import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Registration from "./components/auth/registration";
import Login from "./components/auth/login";
import DemoGetData from "./components/demo-component/DemoGetData";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <h1>Use Our Tool Page</h1>} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/login" component={Login} />
        <Route  path="/demo" component={DemoGetData}/>
      </Switch>
    </Router>
  );
}

export default App;
