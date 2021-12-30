import React, { useEffect, useState } from 'react';
import withCounter from './hoc/withCounter';

const About = (props) => {
	// console.log({ props });
	const [name, setName] = useState('');

	let x = 0;
	++x;
	let y = 2 + x++;
	console.log({ x, y });

	let z = x + ++y;
	console.log({ x, y, z });

	useEffect(() => {
		// console.log('About Page');
		// console.log('name', name);
		// setName(name => 'aditya');
	});

	return (
		// <Mouse>
		<div>
			<h1>About</h1>
			<h1>Count: {props.count}</h1>
			<button type="button" onClick={props.increment}>
				Inc
			</button>
		</div>
		// </Mouse>
	);
};

export default withCounter(About);

// static it cannot be change
// do not compose dynamic componsition in hoc

// render-prop: give me prop on basis of that i will decide what to render
