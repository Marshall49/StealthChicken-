import Footer from '../components/Footer';
import Nav from '../components/Nav';
import React, { Component, PropTypes } from 'react';
import { Link } from "react-router-dom";
import UserInfo from "../components/UserInfo";

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
                this.setState({ username: res.data, date: '' })
            ).catch(err => console.log(err));
    };

    render() {
        return (
            <div className="container-fluid">
                <UserInfo key={physician._id}>
                    <Link to={"/physician/" + physician._id}>
                        <strong>
                            {userName}
                            <br />
                            Member since: {date}
                        </strong>
                    </Link>
                </UserInfo>
            </div>

        )
    }
}