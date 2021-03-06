import React, { Component } from 'react';
import Case from '../components/CaseList';
import { Comment, CommentFeed } from '../components/CommentFeed';
import { Link } from 'react-router-dom';
import { TextArea, FormBtn } from '../components/Form';
import API from '../utils/API';
import './style.css';

class CaseDetail extends Component {

	state = {
        dCase: {}, 
        comment: "",
        physicianId: "",
        caseId: ""
    };
	
	componentDidMount() {
    	this.loadCase();
  	};


  	loadCase() {
  		API.getCase(this.props.match.params.id)
      		.then(res => this.setState({ dCase: res.data }))
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
    						<h1>{this.state.dCase.title}</h1>
    						<p>{this.state.dCase.dexcom}</p>
    						<h3>Description: </h3>
    						<p>{this.state.dCase.description}</p>
    						<h3>Past History: </h3>
    						<p>{this.state.dCase.pastHx}</p>
    						<h3>Recent Changes: </h3>
    						<p>{this.state.dCase.recentHx}</p>
    						<h3>Comments: </h3>
    							{this.state.comments.length ? (    
                            		<CommentFeed>
                                		{this.state.comments.map(comment => (
                                    		<Comment key={comment._id}>
                                        		{dCase.comment}
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