import React, { Component} from "react";
import LoginBtn from "../../components/LoginBtn";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { Input, FormBtn } from "../../components/Form";
import { Link } from "react-router-dom";
c

class Login extends Component {
	state= {
		username: "",
		password: ""
	};

	handleSubmit(event) {
		event.preventDefault();

	}

	handleSignIn(event) {
		event.preventDefault();
		if (this.state.username && this.state.password) {
			//Should this be API, since we are checking it with Mongo?
			API.
		}
	}
}