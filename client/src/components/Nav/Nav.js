import React from 'react';
import "./Nav.css";

const Nav = () =>
    <header>
        <div className="blur"></div>
        <div className="header_bar">
            <nav className="navbar navbar-dark bg-dark">
                
                <div className="container-fluid">
                    <div className="navbar-header shift">
                        <a className="navbar-brand" href="/"><img src="https://vectr.com/champageonponce/aI2dP1Qsu.svg?width=273&height=275&select=aI2dP1Qsupage0" alt="nav logo" className="nav-logo" width="30"/>DIAlogs</a>
                    
                        <ul className="nav nav-pills">
                            <li><a href='/Dashboard'>Home</a></li>
                            <li><a href='/Profile'>Profile</a></li>
                            <li><a href='/AddCase'>Add a Case</a></li>
                            <li><a href='/About'>About</a></li>
                        </ul>
                    </div>

                    <ul className="nav nav-pills">

                        <li><a href='/logout'>Log out</a></li>
                        <li><a href="/physician">Login</a></li>

                    </ul>
                    
                </div>
            </nav>
        </div>
    </header>

    export default Nav;