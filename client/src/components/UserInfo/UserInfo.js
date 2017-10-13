import React from 'react';

const UserInfo = () =>
    <div className='userInfo'>
        <h2> {this.props.name} </h2>
        <h4> {this.props.date} </h4>
        <img src={this.props.imgURL} />
    </div>;

export default UserInfo;