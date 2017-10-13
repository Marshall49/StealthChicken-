import React, { Component } from 'react';
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
    }
}