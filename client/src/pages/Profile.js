import React, { Component } from 'react';
import { Link } from "react-router-dom";
import UserInfo from "../components/UserInfo";
import API from "../utils/API";
import './style.css';

export default class Profile extends Component {
    state = {
        userName: "",
        date: ""
    }

    componentDidMount() {
        this.loadPhysician();
    }

    loadPhysician = () => {
        API.getUser()
            .then(res =>
                this.setState({ 
                    userName: res.data, 
                    date: '' 
                })
            ).catch(err => console.log(err));
    };

    render() {
        return (
            <div className="container-fluid">
                {this.state.userName.map(userName => (
                    <UserInfo key={userName._id}>
                        <img src="" alt="DIAlog logo" />
                        <Link to={"/user/:id"}>
                            <strong>
                                {userName}
                                <br />
                                Member since: {userName.date}
                            </strong>
                        </Link>
                    </UserInfo>
                ))}
            </div>

        );
    }
}