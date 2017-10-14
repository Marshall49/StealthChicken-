import React, { PropTypes } from 'react';

const UserInfo = (props) => {
    return(
        <div className='userInfo'>
            <h2> {props.userName} </h2>
            <h4> {props.date} </h4>
        </div>
    )
};

UserInfo.propTypes = {
    username: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
};

export default UserInfo;