import { useEffect, useState } from 'react';

const Mouse = (props) => {
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

	// return <div>{props.children(cords)}</div>;
};

export default Mouse;

// Goal is share code between component

// We can write any Hoc with render props concept

// context api get using render props
