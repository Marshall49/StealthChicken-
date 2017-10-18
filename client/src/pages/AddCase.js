import React, { Component } from 'react';
import { FormBtn, Input, TextArea, FormSelect } from '../components/Form';
import Button from '../components/Button';
import { Link } from "react-router-dom";
import API from "../utils/API";
import './style.css';

class AddCase extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			dateCreated: "",
			physianId: "",
			description: "",
			age: 0,
			sex: "",
			pastHx: "",
			recentHx: "",
			drugs: "",
			dexcom: {},
			patientId: ""
		};
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		// this.getDexcom = this.getDexcom.bind(this);
	}

	/* Handle form change input */

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

// {/* Handle form submission */}

	handleFormSubmit = event => {
		event.preventDefault();

		API.saveCase({
			title: this.state.title,
			dexcom: this.state.dexcom,
			description: this.state.description,
			age: this.state.age,
			sex: this.state.sex,
			pastHx: this.state.pastHx,
			recentHx: this.state.recentHx,
			drugs: this.state.drugs
		})
			.then(res => console.log(this.state.title))
			.catch(err => console.log(err));
	};


	getDexcom = event => {
		API.getDexcom(this.props.match.params.id)
			.then(res => this.setState({ dexcom : res.data }))
      		.catch(err => console.log(err));
	};

	render() {
		return(
			<div className="container-fluid">

					<div className="col-md-6 col-md-offset-4">
						{/* Form for adding a new case */}
							<form onSubmit={this.handleFormSubmit}>
								<h2><img src="https://vectr.com/champageonponce/aI2dP1Qsu.svg?width=273&height=275&select=aI2dP1Qsupage0" alt="nav logo" className="nav-logo" width="50"/>Drop your case here...</h2>
								<div className="underline"></div>
								<label>
				                    Case title:
				                        <Input
											className="aCase"
				                            value={this.state.title}
				                            onChange={this.handleInputChange}
				                            name="title"
				                            placeholder="Title"
				                        />
				                </label>
				                <br />
				                <label>
				                    Age of patient:
				                        <Input
											className="aCase"
				                            value={this.state.age}
				                            onChange={this.handleInputChange}
				                            name="age"
				                            placeholder="age"
				                        />
				                </label>
				                <br />

                                <div class="form-group">
									<label for="ptsex">Sex of Patient:</label>
									<br />
                                    <select class="form-control" id="sex" >
                                        <option disabled selected >Choose...</option>
                                        <option>Female</option>
                                        <option>Male</option>
                                    </select>
                                </div>
				                <br />
				                <label>
				                    Detailed description of the case:
				                        <Input
										 	className="aCase"
				                            value={this.state.description}
				                            onChange={this.handleInputChange}
				                            name="description"
				                            placeholder="Describe current issue ..."
				                        />
				                </label>
				                <br />
				                 <label>
				                    Pertinent patient history:
				                        <TextArea
											className="aCase"
				                            value={this.state.pastHx}
				                            onChange={this.handleInputChange}
				                            name="pastHx"
				                            placeholder="Past history"
				                        />
				                </label>
				                <br />
				                <label>
				                    Recent changes in patient health:
				                        <TextArea
											className="aCase"
				                            value={this.state.recentHx}
				                            onChange={this.handleInputChange}
				                            name="recentHx"
				                            placeholder="Recent changes"
				                        />
				                </label>
				                <br />
				                 <label>
				                    Current medications and drug allergies:
				                        <TextArea
											className="aCase"
				                            value={this.state.drugs}
				                            onChange={this.handleInputChange}
				                            name="drugs"
				                            placeholder="Medications and allergies"
				                        />
				                </label>
				                <br />
				                 <label>
				                    Import patient's Dexcom data with the patient's id:
				                        <Input
											className="aCase"
				                            value={this.state.patientId}
				                            onChange={this.handleInputChange}
				                            name="patientId"
				                            placeholder="Patient Id"
				                        />
				                        {/* <Button onClick:{this.getDexcom()} className:"btn-default"
				                        >
				                        	Get Decom Data
				                        </Button>      */}
				                </label>
				                <br />
								<label>
									<FormBtn
										disabled={!(this.state.title && this.state.description)}
										onClick={this.handleFormSubmit}
									>
										Save Case
									</FormBtn>
								</label>
				            </form>
				    </div>

			</div>
		)
	}
}

export default AddCase;
