import React from 'react';

const Nav = () =>
    <nav className="navbar navbar-inverse navbar-top">
        <div className="container-fluid">
            <div className="navbar-header">
                <button type="button" className="collapsed navbar-toggle">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                </button>
                <a href='/' className='navbar-brand'>
                </a>
                <ul className="nav navbar-nav navbar-left">
                <li><a href='/Dashboard'><span className="glyphicon glyphicon-th-list"></span>Dashboard</a></li>
                <li><a href='/Profile'><span className="glyphicon glyphicon-user"></span>Profile</a></li>
                <li><a href='/AddCase'><span className="glyphicon glyphicon-upload"></span>Add a Case</a></li>
                <li><a href='/About'><span className="glyphicon glyphicon-tint"></span>About</a></li>
                </ul>

                <ul className="nav navbar-nav navbar-right">
                    <li><a href='/LogOutPage'><span className="glyphicon glyphicon-user"></span>Log out</a></li>
                    <li><a href="/LogInPage"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                </ul>
            </div>
        </div>
    </nav>;

    export default Nav;