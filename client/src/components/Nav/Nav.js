import React from 'react';
import "./Nav.css";

const Nav = () =>

    <nav class="navbar navbar-inverse">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" className="collapsed navbar-toggle">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                </button>
                <a href='/' className='navbar-brand'>
                </a>
                <a class="navbar-brand" href="#">DIAlogs</a>
            </div>
            <ul class="nav navbar-nav">
                <li><a href='/Dashboard'><span className="glyphicon glyphicon-th-list"></span>Home</a></li>
                <li><a href='/Profile'><span className="glyphicon glyphicon-user"></span>Profile</a></li>
                <li><a href='/AddCase'><span className="glyphicon glyphicon-upload"></span>Add a Case</a></li>
                <li><a href='/About'><span className="glyphicon glyphicon-tint"></span>About</a></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <li><a href='/LogOutPage'><span className="glyphicon glyphicon-user"></span>Log out</a></li>
                <li><a href="/LogInPage"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
            </ul>
        </div>
    </nav>

    export default Nav;