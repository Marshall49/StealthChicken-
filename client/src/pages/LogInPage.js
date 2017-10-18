import React, { Component} from "react";
import { Input, FormBtn } from "../components/Form";
// import { Link } from "react-router-dom";
import API from "../utils/API";
import './style.css';

class Login extends Component {
	state={
			username:"",
			password: ""
	}
	// componentDidMount() {
	// 	this.letMeIn();
	// };

	// letMeIn() {
	// 	//api call to check password & username
	// };

	handleUserNameChange= (event)=>{
		this.setState({
			// [name]: value
			username: event.target.value
		});
	};

	handlePasswordChange=(event)=> {
		this.setState({
			// [name]: value
			password: event.target.value
		});
	};

	handleFormSubmit=(event)=>{
		// event.preventDefault();

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
			<div className="wrapper">
				<h3>Log In Now</h3>
				<form>
					<label>
                        Username:
                            <Input
                                value={this.state.userName}
                                onChange={this.handleUserNameChange}
                                name="userName"
                                placeholder="Username"
                            />
                    </label>
                    <br />
					<label>
                        Password:
                            <Input
                                value={this.state.password}
                                onChange={this.handlePasswordChange}
                                name="password"
                                placeholder="Password"
                            />
                    </label>
                    <br />
					<FormBtn
						disabled={!(this.state.username && this.state.password)}
						onClick={this.handleFormSubmit}
					> Log In </FormBtn>
				</form>
			</div>
		)
	}
}

export default Login;
