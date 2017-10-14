import React, { Component } from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import { Case, CaseList } from '../components/CaseList';
import CommentFeed from '../components/CommentFeed';
import Button from '../components/Button';
import { Link } from "react-router-dom";
import API from "../utils/API";


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cases: [],
            description: "",
            dataCreated: "",
            dexcom: {},
            detailedDescription: "",
            comment:[]
        }
    }

    componentDidMount(){
        this.loadCases();
    }

    loadCases(){
        API.getCases()
            .then(res => 
                this.setState({ 
                    cases: res.data, 
                    description: "", 
                    dateCreated: "", 
                    dexcom: {},
                    detailedDescription: "" })
            )
            .catch(err => console.log(err));
    };

    render() {
        return(
            <div className="wrapper">
                <Nav />

                <div className="row justify-content-md-center">    
                    <h1>Welcome to DIAlogs</h1>
                </div>
               
            {/* List of Cases */}
                <div className="row justify-content-md-center">
                    <div className="col col-md-8">
                        {this.state.cases.length ? (    
                            <CaseList>
                                {this.state.cases.map(icase => (
                                    <Case key={icase._id}>
                                        <Link to={"/cases/" + icase._id}>
                                            <strong>
                                                {icase.description}  
                                            </strong>
                                        </Link>
                                    </Case>              
                                ))}
                            </CaseList>
                        ) : (
                            <h3>No Cases to Display</h3>
                        )}
                    </div>            

                {/* Add New Case Button */}    
                    <div className="col col-md-4">
                        <Link to="/addcase">
                            <Button className="btn-primary btn-lg">
                                Add a New Case
                            </Button>
                        </Link>    
                    </div>
                </div>  

            {/* Case Detail Modal */}
                <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                        <h4 className="modal-title" id="myModalLabel">Modal title</h4>
                            </div>
                        {/* Need to add in the form here */}
                            <div className="modal-body">

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