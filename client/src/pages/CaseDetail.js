import React, { Component } from 'react';
import Case from '../components/CaseList';
import { Comment, CommentFeed } from '../components/CommentFeed';
import { Link } from 'react-router-dom';
import { TextArea, FormBtn } from '../components/Form';
import API from '../utils/API';
import './style.css';

class CaseDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			icase: {}, 
			comment: "",
			physicianId: "",
			caseId: ""
		}

		this.componentDidMount = this.componentDidMount.bind(this);
		this.loadCase = this.loadCase.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}

	componentDidMount() {
    	this.loadCase();
  	};


  	loadCase() {
  		API.getCase(this.props.match.params.id)
      		.then(res => this.setState({ icase: res.data }))
      		.catch(err => console.log(err));
  	};

  	handleFormSubmit = event =>{
        event.preventDefault();
        if (this.state.comment) {
        	API.saveComment({
                comment: this.state.comment,
                physicianId: this.state.physicianId,
                caseId: this.state.caseId
            })
        	.then(res => this.loadCase())
            .catch(err => console.log(err));
  		}
    };

    render() {
    	return (
    		<div className="container-fluid">
    			<div className="row justify-content-md-center">
    				<div className="col col-lg-8">
    					<article>
    						<h1>{this.state.icase.title}</h1>
    						<p>{this.state.icase.dexcom}</p>
    						<h3>Description: </h3>
    						<p>{this.state.icase.description}</p>
    						<h3>Past History: </h3>
    						<p>{this.state.icase.pastHx}</p>
    						<h3>Recent Changes: </h3>
    						<p>{this.state.icase.recentHx}</p>
    						<h3>Comments: </h3>
    							{this.state.comments.length ? (    
                            		<CommentFeed>
                                		{this.state.comments.map(comment => (
                                    		<Comment key={comment._id}>
                                        		{icase.comment}
                                    		</Comment>              
                                		))}
                            		</CommentFeed>
                        		) : (
                            		<h3>No Comments to Display</h3>
                        		)}
                        	<h3>Join the conversation: </h3>
                        	<TextArea />
                        	<FormBtn onClick={this.handleFormSubmit}>
                        		Submit Comment
                        	</FormBtn>
                        </article>	
                    </div>
                </div>
            </div>                	
    	);
    }
}

export default CaseDetail;