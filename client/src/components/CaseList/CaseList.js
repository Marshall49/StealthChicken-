import React from 'react';
import "./Case.css";

export const CaseList = ({ children }) => {
    return (
        <div className="list-overflow-container">
            <ul className="list-group">
                {children}
            </ul>
        </div>
    );
};