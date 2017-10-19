import React from 'react';
import "./Form.css";

export const FormBtn = props =>
    <button {...props} style={{ float: 'right' }} className='btn btn-dark'>
        {props.children}
    </button>;