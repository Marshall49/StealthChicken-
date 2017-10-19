import React, { Component } from 'react';
import { Case, CaseList } from '../components/CaseList';

// import CommentFeed from '../components/CommentFeed';
import Button from '../components/Button';
import { Link } from "react-router-dom";
import API from "../utils/API";
import './style.css';


class Dashboard extends Component {
   
    state = {
        cases: [],
        title: "",
        dataCreated: "",
        dexcom: {},
        description: "",
        comments:[]
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
            <div className="container-fluid">

                <div className="row justify-content-md-center">    
                    <h1>Welcome to DIAlogs</h1>
                </div> 

                {/* Add New Case Button */}
                <div className="row justify-content-md-center">
                    <Link to="/addcase">
                        <Button className="btn-dark btn-lg">
                            New Case
                        </Button>
                    </Link>
                </div>
               
                {/* List of Cases */}
                <div className="row row-flex">

                    {/* Display case list */}
                    <div className="col-md-8">
                        <div className="content color">
                            {this.state.cases.length ? (    
                                <CaseList>
                                    {this.state.cases.map(icase => (
                                        <Case key={icase._id}>
                                            <Link to={"/cases/" + icase._id}>
                                                <strong>
                                                    {icase.title}  
                                                </strong>
                                                <p>Description:    
                                                    {icase.description}
                                                </p>    
                                            </Link> 
                                        </Case>              
                                    ))}
                                </CaseList>
                            ) : (
                                <h3>There are currently no cases to display.  Start the conversation by clicking the button the right to add a new one!</h3>
                            )}
                        </div>  
                    </div>
                </div>  
            </div>                   
        );
    }
};

export default Dashboard;
