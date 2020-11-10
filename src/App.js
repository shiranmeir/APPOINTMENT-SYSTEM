import React from "react";
import { Route, Redirect, Switch, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Doctor from "./components/Doctor/Doctor.jsx";
import Login from "./components/Login/Login.jsx";
const App = () => {
  return (
    <div className="app">
      {/* <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} />
          <Route exact path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter> */}
      <Login />
    </div>
  );
};

export default App;
