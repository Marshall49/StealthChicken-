import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About"
import LogInPage from "./pages/LogInPage";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import AddCase from "./pages/AddCase";
import LogOut from "./pages/LogOutPage";
import NoMatch from "./pages/NoMatch";

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/User" component={LogInPage} />
        <Route exact path="/User/:id" component={Profile} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/about" component={About} />
        <Route exact path="/addcase" component={AddCase} />
        <Route exact path="/logout" component={LogOut} />
        {/* redirect to acct creation */}
        <Route component={NoMatch}/>

      </Switch>
      <Footer />
    </div>
  </Router>;

export default App;
