import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About"
import LogInPage from "./pages/LogInPage";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import Nav from "./components/Nav"

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/physician" component={LogInPage} />
        <Route exact path="/physician/:id" component={Profile} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/about" component={About} />
        {/* redirect to acct creation */}
        
      </Switch>
    </div>
  </Router>;

export default App;

