import React from 'react';

const Button = ({ type, className, children, onClick }) => (
	<button 
		onClick={onClick}
		className={`btn btn-${type ? type : "default"}${className ? " " + className : ""}`}
	>
		{children}
	</button>		
);

export default Button;