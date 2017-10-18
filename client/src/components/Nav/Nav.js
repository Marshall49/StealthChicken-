import React from 'react';
import "./Nav.css";

const Nav = () =>

    <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
            <div className="navbar-header shift">
                <a className="navbar-brand" href="/Dashboard"><img src="https://vectr.com/champageonponce/aI2dP1Qsu.svg?width=273&height=275&select=aI2dP1Qsupage0" alt="nav logo" className="nav-logo" width="30"/>DIAlogs</a>
            
                <ul className="nav navbar-nav">
                    <li><a href='/Dashboard'>Home</a></li>
                    <li><a href='/Profile'>Profile</a></li>
                    <li><a href='/AddCase'>Add a Case</a></li>
                    <li><a href='/About'>About</a></li>
                </ul>
            </div>

            <ul className="nav navbar-nav navbar-right">

                <li><a href='/logout'><span className="glyphicon glyphicon-user"></span>Log out</a></li>
                <li><a href="/physician"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>

            </ul>
            
        </div>
    </nav>

    export default Nav;