import React from 'react';
import { Link } from "react-router-dom";
import Button from '../components/Button';
import './style.css';


const LogOut = () =>
  <div className="container-fluid">    

    <div className="row justify-content-center">
        <div className="contain col-md-5">
            <div className="out row col-md-5">
                <h2 id="bye">
                    <strong>
                        Logged out!
                    </strong>
                </h2>
            </div>

            <div className="out row col-md-5">
                <h4>Need to sign back in?</h4>
                    <Link to="/user">    
                        <Button className="btn-dark">
                            Sign In
                        </Button>
                    </Link>    
            </div>
        </div>
    </div>
</div>
;

export default LogOut;
