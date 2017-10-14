import React from 'react';

export const FormSelect = props =>
    <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown button
        </button>
        
        <div class="dropdown-menu" placeholder="Select your specialty...">
            <a class="dropdown-item" href="#">Endocrinologist</a>
            <a class="dropdown-item" href="#">Primary Care</a>
            <a class="dropdown-item" href="#">Cardiologist</a>
            <a class="dropdown-item" href="#">Other Physician</a>
        </div>
    </div>;