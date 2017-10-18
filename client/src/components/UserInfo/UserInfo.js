import React, { PropTypes } from 'react';
import "./UserInfo.css";

const UserInfo = (props) => {
    return(
        <div className='userInfo'>
            <h2> {props.userName} </h2>
            <h4> {props.date} </h4>
        </div>
    )
};

export default UserInfo;