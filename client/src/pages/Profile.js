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
                    username: res.data, 
                    date: '' 
                })
            ).catch(err => console.log(err));
    };

    render() {
        return (
            <div className="container-fluid">
                {this.state.userName.map(username => (
                    <UserInfo key={username._id}>
                        <img src="" alt="DIAlog logo" />
                        <Link to={"/physician/:id"}>
                            <strong>
                                {username}
                                <br />
                                Member since: {username.date}
                            </strong>
                        </Link>
                    </UserInfo>
                ))}
            </div>

        );
    }
}