import React from 'react';
import withCounter from './hoc/withCounter';
import Mouse from './render_props/Mouse';

const About = (props) => {
	// console.log({ props });

	let x = 0;
	++x;
	let y = 2 + x++;
	console.log({ x, y });

	let z = x + ++y;
	console.log({ x, y, z });

	return (
		<Mouse>
				<div>
					<h1>About</h1>
					<h1>Count: {props.count}</h1>
					<button type="button" onClick={props.increment}>
						Inc
					</button>
				</div>
			
		</Mouse>
	);
};

export default withCounter(About);

// static it cannot be change
// do not compose dynamic componsition in hoc

// render-prop: give me prop on basis of that i will decide what to render
