import React from "react";
import { Route, Redirect, Switch, BrowserRouter } from "react-router-dom";
import Login from "./components/Login/Login.jsx";
import Home from "./components/Home/Home.jsx";
import Signin from "./components/Signin/Signin.jsx";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/signin" component={Signin} />
          <Route path="/home" component={Home} />
          <Route path="/" component={Login} />
          <Route exact path="/" component={Login} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
