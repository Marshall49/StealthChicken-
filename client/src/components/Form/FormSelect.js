import React from 'react';

export const FormSelect = props =>
    <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown button
        </button>
        <select placeholder="Select your specialty...">
            <option value="endocrinologist">Endocrinologist</option>
            <option value="primary">Primary Care</option>
            <option value="cardiologist">Cardiologist</option>
            <option value="other">Other Physician</option>
        </select>
    </div>;