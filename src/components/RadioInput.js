import React from 'react';

const RadioInput = ({ id, label, ...rest }) => {
	return (
		<div>
			<input id={id} {...rest} />
			<label htmlFor={id}>{label}</label>
		</div>
	);
};

export default RadioInput;
