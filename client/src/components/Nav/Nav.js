import React from 'react';
import "./Nav.css";

const Nav = () =>

    <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
            <div className="navbar-header">
                <a className="navbar-brand" href="/Dashboard">DIAlogs</a>
            
                <ul className="nav navbar-nav">
                    <li><a href='/Dashboard'>Home</a></li>
                    <li><a href='/Profile'>Profile</a></li>
                    <li><a href='/AddCase'>Add a Case</a></li>
                    <li><a href='/About'>About</a></li>
                </ul>
            </div>

            <ul className="nav navbar-nav navbar-right">
                <li><a href='/LogOutPage'>Log out</a></li>
                <li><a href="/LogInPage">Login</a></li>
            </ul>
            
        </div>
    </nav>

    export default Nav;