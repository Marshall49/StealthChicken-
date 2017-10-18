import React, { Component} from "react";
import { Input, FormBtn } from "../components/Form";
// import { Link } from "react-router-dom";
import API from "../utils/API";
import './style.css';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state={
			username:"",
			password: ""
		}
	}
	// componentDidMount() {
	// 	this.letMeIn();
	// };

	// letMeIn() {
	// 	//api call to check password & username
	// };

	handleInputChange(event) {
		const { name, value } =event.target;

		this.setState({
			[name]: value
		});
	};

	handleFormSubmit(event){
		event.preventDefault();

		if(this.state.userName && this.state.password) {
			API.getUser({
				username: this.state.username,
				password: this.state.password
			})
				.then(res => console.log(this.state.username))
				.catch(err => console.log(err));
		}
	};

	render() {
		return(
			<div className="container-fluid">

			{/* box to contain login form */}
			<div className="col-md-6 col-md-offset-4">
				<div className="form">
					
					<form>
						<h2><img src="https://vectr.com/champageonponce/aI2dP1Qsu.svg?width=273&height=275&select=aI2dP1Qsupage0" alt="nav logo" className="nav-logo" width="50"/>Log In Now</h2>	
						<div className="already"></div>
						<label>
							Username:
								<Input 
									value={this.state.userName}
									onChange={this.handleInputChange}
									name="userName"
									placeholder="Username"
								/>
						</label>
						<br />
						<label>
							Password:
								<Input 
									value={this.state.password}
									onChange={this.handleInputChange}
									name="password"
									placeholder="Password"
								/>
						</label>
						<br />	
						<label>
						<FormBtn 
							disabled={!(this.state.username && this.state.password)}
							onClick={this.handleFormSubmit}
						> Log In </FormBtn>
						</label>
					</form>
				</div>
			</div>
		</div>
		)			
	}
}

export default Login;