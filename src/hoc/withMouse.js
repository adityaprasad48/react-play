/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';

// Sharing Behaviour
const withMouse = (Component) => (props) => {
	const [cords, setCords] = useState({
		x: 0,
		y: 0,
	});

	const handleMouseCords = (e) => {
		const { clientX: x, clientY: y } = e;
		setCords({ x, y });
	};

	useEffect(() => {
		window.addEventListener('mousemove', handleMouseCords);
		return () => {
			window.removeEventListener('mousemove', handleMouseCords);
		};
	}, []);
	return (
		<div>
			<Component mouseCords={cords} />
		</div>
	);
};

export default withMouse;
