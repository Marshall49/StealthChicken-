import React, { Component } from 'react';
import { FormBtn, Input, TextArea, FormSelect } from '../components/Form';
import Button from '../components/Button';
import { Link } from "react-router-dom";
import API from "../utils/API";

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

// {/* Handle form change input */}

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

				<div className="row justify-content-md-center">
					<div className="col col-md-8">
						{/* Form for adding a new case */}
							<form>
								<label>
				                    Brief title of the case:
				                        <Input
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
				                            value={this.state.age}
				                            onChange={this.handleInputChange}
				                            name="age"
				                            placeholder="age"
				                        />
				                </label>
				                <br />
				                <label>
				                    Sex of patient:
				                        <FormSelect options={[
											{ label: 'Female', value: 'female' },
											{ label: 'Male', value: 'male' }
										]} 
				                            value={this.state.sex}
				                            onChange={this.handleSelect}
				                            name="sex"
				                            placeholder="Choose"
				                        />
				                </label>
				                <br />
				                <label>
				                    Detailed description of the case:
				                        <Input
				                            value={this.state.description}
				                            onChange={this.handleInputChange}
				                            name="description"
				                            placeholder="Describe what the current issue is."
				                        />
				                </label>
				                <br />
				                 <label>
				                    Pertinent patient history:
				                        <TextArea
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
				                <FormBtn
				                	disabled={!(this.state.title && this.state.description)}
				                	onClick={this.handleFormSubmit}
				                >
				                	Save Case
				                </FormBtn>
				            </form>
				    </div>
				</div>
			</div>
		)
	}
}

export default AddCase;
