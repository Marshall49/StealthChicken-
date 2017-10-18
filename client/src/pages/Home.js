import React, { Component } from 'react';
import { FormBtn, Input, FormSelect } from '../components/Form';
import Button from '../components/Button';
import { Link } from "react-router-dom";
import API from "../utils/API";
var Dropdown = require('react-simple-dropdown');
var DropdownTrigger = Dropdown.DropdownTrigger;
var DropdownContent = Dropdown.DropdownContent;

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            email: "",
            specialty: null,
            password: "",
        }
        this.loadPhysician = this.loadPhysician.bind(this);
    }

    componentDidMount(){
        this.loadPhysician();
    }

    loadPhysician(){
        API.sendUser()
            .then(res =>
                this.setState({
                    userName: res.data,
                    email: "",
                    specialty: null,
                    password: "",
                })
            )
            .catch(err => console.log(err));
    };

    handleSelect (option, event) {
		if (!this.props.onValueClick) return;
		this.props.onValueClick(option, event);
	}

    handleInputChange = event => {
        const { name, value } = event.target.value;
        this.setState({
        [name]: value
        });
    };

    handleFormSubmit(event) {
        event.preventDefault();
        if ((this.state.userName && this.state.email && this.state.specialty && this.state.password)) {
            API.saveUser({
                userName: this.state.userName,
                email: this.state.email,
                specialty: this.state.specialty,
                password: this.state.password,
            })
            .then(res => this.loadPhysician())
            .catch(err => console.log(err));
        }
    };


    render() {
        return (
            <div className="container-fluid">
             {/* Sign In Button */} 
                <div className="row justify-content-center">
                    <div className="jumbotron-fluid logo">
                        <img src="https://vectr.com/champageonponce/a1ozpfdNiu.svg" alt="dialog logo" className=""/>
                    </div>
                </div>

            {/* box to contain sign up form */}
                <div className="col-md-6 col-md-offset-4">
                    <div className="form">
                        

                        {/* //Here is where an account is created  */}
                        <form onSubmit={this.handleFormSubmit}>
                        <div className="area">
                        <h3>Sign up below!</h3>

                                <Input
                                    value={this.state.userName}
                                    onChange={this.handleInputChange}
                                    name="userName"
                                    placeholder="Username"
                                />
                                
                                <Input
                                    value={this.state.email}
                                    onChange={this.handleInputChange}
                                    name="email"
                                    placeholder="Email Address"
                                />

                                <div class="form-group">
                                    <select class="form-control" id="specialty">
                                        <option disabled selected>Select Specialty...</option>
                                        <option>Endocrinologist</option>
                                        <option>Internal Medicince</option>
                                        <option>Cardiologist</option>
                                        <option>Certified Diabetes Educator</option>
                                        <option>Other Physician</option>
                                    </select>
                                </div>

                                <Input
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.handleInputChange}
                                    name="password"
                                    placeholder="Password"
                                />

                            <label>
                            <FormBtn
                                disabled={!(this.state.userName && this.state.password)}
                                onClick={this.handleFromSubmit}
                            >
                                Create Account
                            </FormBtn>
                            </label>

                            <br />
                            <div className="already">
                                <div>
                                    Already a member?   
                                    <Link to="/physician">
                                        <Button className="btn-dark">
                                            Sign In
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                            </div>
                        </form>
                    </div>

                </div>

            </div>
        )
    }
}
