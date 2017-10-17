import React, { Component } from 'react';
import { Case, CaseList } from '../components/CaseList';

// import CommentFeed from '../components/CommentFeed';
import Button from '../components/Button';
import { Link } from "react-router-dom";
import API from "../utils/API";


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cases: [],
            title: "",
            dataCreated: "",
            dexcom: {},
            description: "",
            comments:[]
        }
        this.loadCases = this.loadCases.bind(this);
    }

    componentDidMount(){
        this.loadCases();
    }

    loadCases(){
        API.getCases()
            .then(res => 
                this.setState({ 
                    cases: res.data, 
                    title: "", 
                    dateCreated: "", 
                    description: ""
                })
            )
            .catch(err => console.log(err));
    };

    render() {
        return(
            <div className="wrapper">

                <div className="row justify-content-md-center">    
                    <h1>Welcome to DIAlogs</h1>
                </div>
               
            {/* List of Cases */}
            <div className="row row-flex">
                <div className="col-sm-6">
                    <div className="content color-1">
                        {this.state.cases.length ? (    
                            <CaseList>
                                {this.state.cases.map(icase => (
                                    <Case key={icase._id}>
                                        <Link to={"/cases/" + icase._id}>
                                            <strong>
                                                {icase.title}  
                                            </strong>
                                                {icase.detailedDescription}
                                        </Link>
                                    </Case>              
                                ))}
                            </CaseList>
                        ) : (
                            <h3>No Cases to Display</h3>
                        )}
                    </div>  
                </div>
            </div>          

                {/* Add New Case Button */}    
                    <div className="col col-md-4">
                        <Link to="/addcase">
                            <Button className="btn-primary btn-lg">
                                Add a New Case
                            </Button>
                        </Link>    
                    </div>

            {/* Case Detail Modal */}
                <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                        <h4 className="modal-title" id="myModalLabel">Case Detail</h4>
                            </div>
                        {/* Need to add in the form here */}
                            <div className="modal-body">
                                {/* route to case/:id, get indivual case data with comments and dexcom. need ability to add comment here as well */}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>                     
        );
    }   
};

export default Dashboard;