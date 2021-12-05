import React from 'react';
import withMouse from './../hoc/withMouse';

const MousePosition = ({ mouseCords }) => {
	return (
		<div style={{ border: '1px solid red' }}>
			<h1>Mouse Coordinates</h1>
			<h1>
				X: {mouseCords.x} Y: {mouseCords.y}
			</h1>
		</div>
	);
};

export default withMouse(MousePosition);
