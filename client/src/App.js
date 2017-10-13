import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
        <Route component={} />
      </Switch>
      <Footer />
    </div>
  </Router>;

export default App;

