import React from 'react';
import "./Nav.css";

const Nav = () =>

    <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
            <div className="navbar-header">
                <a className="navbar-brand" href="/Dashboard">DIAlogs</a>
            </div>
            <ul className="nav navbar-nav">
                <li><a href='/Dashboard'><span className="glyphicon glyphicon-th-list"></span>Home</a></li>
                <li><a href='/Profile'><span className="glyphicon glyphicon-user"></span>Profile</a></li>
                <li><a href='/AddCase'><span className="glyphicon glyphicon-upload"></span>Add a Case</a></li>
                <li><a href='/About'><span className="glyphicon glyphicon-tint"></span>About</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
                <li><a href='/LogOutPage'><span className="glyphicon glyphicon-user"></span>Log out</a></li>
                <li><a href="/LogInPage"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
            </ul>
        </div>
    </nav>

    export default Nav;