import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Registration from "./components/auth/registration";
import Login from "./components/auth/login";
import DemoApp from "./components/demo-component/DemoApp"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <h1>Use Our Tool Page</h1>} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/demo" component={DemoApp}/>
        
      </Switch>
    </Router>
  );
}

export default App;
