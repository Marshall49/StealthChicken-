import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import './style.css';

const NoMatch = () =>
	<div className="container-fluid">
		<div className="row justify-content-md-center">
				<div className="uh-oh">
					<h1 className="faticorn">Uh Oh! It appears a unicorn has eaten this page!</h1>
					<img src="https://i.imgur.com/5ajO8MH.jpg" alt="fat-unicorn" className="fat-unicorn"/>
					
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