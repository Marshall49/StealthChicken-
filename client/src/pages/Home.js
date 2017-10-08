import React, { Component } from 'react';
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';
import { FormBtn, Input, TextArea } from '../../components/Form';

export default class Home extends Component {
    state = {
        userName: "",
        email: "",
        password: "",
        repeatPass: ""
    };

    componentDidMount() {
        this.letMeIn();
    };

    letMeIn() {
        //api call to retrieve login authorization 
    };

    handleInputChange(event) {
        const { name, value } =event.target;
        this.setState({
            [name]: value
        });
    };

    handleFromSubmit(event) {
        event.preventDefault();
        if (this.state.userName && this.state.password) {
            //set up API 
        }
    };

    render() {
        return (
            //Here is where an account is created 
            <form>
                <Input 
                    value={this.state.userName}
                    onChange={this.handleInputChange}
                    name="username"
                    placeholder="Username (required)"
                />
                <Input 
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    name="email"
                    placeholder="Email Address"
                />
                <Input
                    value={this.state.password}
                    onChange={this.state.handleInputChange}
                    name="password"
                    placeholder="Password (required)"
                />
                <Input
                    value={this.state.repeatPass}
                    onChange={this.state.handleInputChange}
                    name="repeat password"
                    placeholder="Repeat Password (required)"
                />
                <FormSelect options={[
                        { label: 'Endocrinologist', value: 'endo' },
                        { label: 'Primary Care Physician', value: 'primary' },
                        { label: 'Cardiologist', value: 'cardio' },
                        { label: 'Certified Diabetes Educator', value: 'CDE', disabled: true },
                    ]} 
                    firstOption="Select" 
                    onChange={this.handleSelect} />
                <FormBtn
                    disabled={!(this.state.userName && this.state.password)}
                    onClick={this.handleFromSubmit}
                >
                    Create Account
                </FormBtn>
            </form>
        )
    }
}