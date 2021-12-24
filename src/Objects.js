import React from 'react';

const Objects = () => {
	// Object.assign()
	// The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object

	const returnedTarget = Object.assign({ a: 1 }, { name: 'adi' });

	// cloning an object
	const originalObj = { a: 1 };
	const copy = Object.assign({}, originalObj);
	console.log(copy); // { a: 1 }

	// Merging Objects
	const o1 = { a: 1 };
	const o2 = { b: 2 };
	const o3 = { c: 3 };

	const objMerege = Object.assign(o1, o2, o3);

	// Merging with same properties
	const o4 = {
		a: 1,
		b: 1,
		c: 1,
		d: {
			name: {
				first_name: 'adi',
				last_name: 'prasad',
			},
		},
	};
	const o5 = { b: 2, c: 2 };
	const o6 = { c: 3 };

	return <div></div>;
};

export default Objects;
