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
            .then(res => this.setState ({ cases: res.data}))
    }


    render() {
        return(
            <div className="wrapper">
                <Nav />
                <h1>Welcome to DIAlogs</h1>

            </div>    
        )
    }
    
};

export default Dashboard;