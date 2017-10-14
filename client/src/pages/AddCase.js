import React, { Component } from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import { FormBtn, Input, TextArea, FormSelect } from '../components/Form';
import Button from '../components/Button';
import { Link } from "react-router-dom"; 

class AddCase extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			dateCreated: "",
			physianId: "",
			dexcom: {},
			description: "",
			age: 0,
			sex: "",
			pastHx: 
		}
	}
}

export default AddCase;