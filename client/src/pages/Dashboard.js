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
            <div>
                <div className="wrapper">

                    <div className="col-sm-8">

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
                        </div>
                    </div>

                </div> 
            </div>                     

        );
    }
};

export default Dashboard;
