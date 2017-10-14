import React, { Component } from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import { FormBtn, Input, TextArea } from '../components/Form';
import { Article, ArticleList } from '../components/ArticleList';
import CommentFeed from '../components/CommentFeed';
import API from "../utils/API";


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cases: [],
            description: "",
            dataCreated: "",
            dexcom: {},
            detailedDescription: ""
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
                
                <div className="row justify-content-md-center">
                    <div className="col col-md-8">
                        {this.state.cases.length ? (    
                            <ArticleList>
                                {this.state.cases.map(case =>(
                                    <Article key={case._id}>
                                        <Link to={"/cases/" + case._id}>
                                            <strong>
                                                {case.description}  
                                            </strong>
                                        </Link>
                                    </Article>              
                                ))}
                            </ArticleList>
                        ) : (
                            <h3>No Cases to Display</h3>
                        )}
                    </div>            

                    <div className="col col-md-4"    
            </div>    
        )
    }
    
};

export default Dashboard;