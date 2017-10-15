import React from 'react';
import { Link } from "react-router-dom";
import Button from '../components/Button';
import Nav from "../components/Nav";
import Footer from "../components/Footer";


const LogOut = () =>
  <div>
    <Nav />
    {/* Sign In Button */}    

    <div className="pull-right">
        <p>Need to sign back in?</p>
            <Link to="/physician">    
                <Button className="btn-dark">
                    Sign In
                </Button>
            </Link>    
    </div>
        <h2>
            <strong>
                You have been logged out!
            </strong>
        </h2>
    <Footer />
  </div>
;

export default LogOut;
