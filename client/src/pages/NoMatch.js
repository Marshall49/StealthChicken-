import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import './style.css';

const NoMatch = () =>
	<div className="container-fluid">
		<div className="row justify-content-md-center">
				<div className="jumbotron">
					<h1>Uh Oh! It appears the unicorn has eaten this page!</h1>
					<img src="../../images/fat-unicorn.png" alt="fat-unicorn" />
					
					<div>
					<Link to="/">
                        <Button className="btn-danger btn-lg">
                            Flee back home!
                        </Button>
                    </Link>
                    </div>
                    
				</div>
			</div>
	</div>;

export default NoMatch;					