import React, { Component} from "react";
import LoginBtn from "../../components/LoginBtn";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { Input, FormBtn } from "../../components/Form";
import { Link } from "react-router-dom";

class Login extends Component {
	state= {
		username: "",
		password: ""
	};

	componentDidMount() {
		this.letMeIn();
	};

	letMeIn() {
		//api call to check password & username
	};

	handleInputChange(event) {
		const { name, value } =event.target;

		this.setState({
			[name]: value
		});
	};

	handleFormSubmit(event) {
		event.preventDefault();

		if(this.state.userName && this.state.password) {
			//need api call to log in
		} else {
			//display error message?
		}
	};

	render() {
		return(
			<div className="wrapper">
				<h3>Log In Now</h3>

				//Log in form
				<form>
					<Input
						value={this.state.username}
						onChange={this.handleInputChange}
						name="username"
						placeholder="Username (required)"
					/>
					<Input
						value={this.state.password}	
						onChange={this.handleInputChange}
						name="password"
						placeholder="Password (required)"
					/>	
					<LoginBtn 
						disabled={!(this.state.username && this.state.password)}
						onClick=(this.handleFormSubmit)
					/>
				</form>
			</div>
		)			
	}
}

export default Login;