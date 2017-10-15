import React from 'react';

export const FormSelect = props =>
    <div className="dropdown">
        <select required = "required" placeholder="Select your specialty...">
            <option value="Select">Please select specialty</option>
            <option value="endocrinologist">Endocrinologist</option>
            <option value="primary">Primary Care</option>
            <option value="cardiologist">Cardiologist</option>
            <option value="other">Other Physician</option>
            <option value="CDE">CDE</option>
        </select>
    </div>;