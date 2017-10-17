import React from 'react';

export const FormSelect = (props) =>
    <div className="dropdown">
        <select required = "required" placeholder="Select...">
            <option value="Select">
                {children}
            </option>
        </select>
    </div>;