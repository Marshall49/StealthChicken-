import React, { Component} from "react";
import { Input, FormBtn } from "../components/Form";
import { Link } from "react-router-dom";
import API from "../utils/API";
import './style.css';

class Login extends Component {
	state={
			userName:"",
			password: "",
			cases: {}
	}

	componentDidMount(){
        this.loadDashboard();
    }
    
    loadDashboard(){
        API.getCases()
            .then(res =>
                this.setState({
                   cases: res.data
                })
            )
            .catch(err => console.log(err));
    };


	handleUserNameChange= (event)=>{
		this.setState({
			userName: event.target.value
		});
	};

	handlePasswordChange=(event)=> {
		this.setState({
			password: event.target.value
		});
	};

	handleFormSubmit=(event)=>{
		if(this.state.userName && this.state.password) {
			API.getUser({
				userName: this.state.userName,
				password: this.state.password
			})
				.then(res => this.loadDashboard(res.redirect('/dashboard')))
				.catch(err => console.log(err))
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
									onChange={this.handleUserNameChange}
									name="userName"
									placeholder="Username"
								/>
						</label>
						<br />
						<label>
							Password:
								<Input 
									type="password"
									value={this.state.password}
									onChange={this.handlePasswordChange}
									name="password"
									placeholder="Password"
								/>
						</label>
						<br />	
						<label>
						<FormBtn 
							/* disabled={!this.state.email || !this.state.password} */
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
