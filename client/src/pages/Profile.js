import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';
import { Article, ArticleList } from '../../components/ArticleFeed';
import CommentFeed from '../../components/CommentFeed';

export default class Profile extends Component {
    state = {
        username: "",
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
                            {username}
                            <br />
                            Member since: {date}
                        </strong>
                    </Link>
                </UserInfo>
            </div>

        )
    }
}