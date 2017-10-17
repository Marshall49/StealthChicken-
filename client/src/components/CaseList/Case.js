import React from 'react';
import "./Case.css"

export const Case = props =>
    <li className="list-group-item">
        {props.children}
    </li>;