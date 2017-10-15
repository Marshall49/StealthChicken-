import React, { Component } from 'react';
import { FormBtn, Input, FormSelect } from '../components/Form';
import Button from '../components/Button';
import { Link } from "react-router-dom";
import API from "../utils/API"; 

export default class Home extends Component {
    constructor(props) { 
        super(props);
        this.state = {
            userName: "",
            email: "",
            specialty: null,
            password: "",
            repeatPass: ""
        };
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
                    repeatPass: ""
                })
            )
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
        [name]: value
        });
    };

    handleFormSubmit(event) {
        event.preventDefault();
        if ((this.state.userName && this.state.password) && (this.state.password === this.state.repeatPass)) {
            API.saveUser({
                userName: this.state.userName,
                email: this.state.email,
                specialty: this.state.specialty,
                password: this.state.password,
                repeatPass: this.state.repeatPass
            })
            .then(res => this.loadPhysician())
            .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <div className="container-fluid">
             {/* Sign In Button */}    

                <div className="pull-right">
                    <p>Already a member?</p>
                    <Link to="/physician">    
                        <Button className="btn-dark">
                            Sign In
                        </Button>
                    </Link>    
                </div>
                
            {/* box to contain sign up form */}
                <div className="form-container">
                    <h3>Sign up below!</h3>

                    {/* //Here is where an account is created  */}
                    <form onSubmit={this.handleFormSubmit}>
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
                            Email Address:
                            <Input 
                                value={this.state.email}
                                onChange={this.handleInputChange}
                                name="email"
                                placeholder="Email Address"
                            />
                        </label>
                        <br />
                        <label>
                            Select Specialty:
                            <FormSelect options={[
                                    { label: 'Endocrinologist', value: 'endo' },
                                    { label: 'Primary Care Physician', value: 'primary' },
                                    { label: 'Cardiologist', value: 'cardio' },
                                    { label: 'Certified Diabetes Educator', value: 'CDE' },
                                ]} 
                                firstOption="Select" 
                                onChange={this.handleSelect} />
                        </label>
                        <br/>
                        <label>
                            Create Password:
                            <Input
                                value={this.state.password}
                                onChange={this.handleInputChange}
                                name="password"
                                placeholder="Password"
                            />
                        </label>
                        <br />
                        <label>
                            Re-enter Password:
                            <Input
                                value={this.state.repeatPass}
                                onChange={this.handleInputChange}
                                name="repeatPass"
                                placeholder="Repeat Password"
                            />
                        </label>
                        <br />
                        <br />
                        <FormBtn
                            disabled={!(this.state.userName && this.state.password)}
                            onClick={this.handleFromSubmit}
                        >
                            Create Account
                        </FormBtn>
                    </form>
                </div>
     
            </div>
        )
    }
}