import React from 'react';

const ArrayMethods = () => {
	// Flat Method
	// Flataning Arrary
	const arr2 = [1, 2, [3, 4, [5, 6]]];
	console.log('arr2.flat()', arr2.flat());

	const arr3 = [1, 2, [3, 4, [5, 6]]];
	console.log('arr3.flat(2)', arr3.flat(2));

	const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
	console.log('arr4.flat(Infinity)', arr4.flat(Infinity));

	const arr5 = [1, 2, , 4, 5];
	console.log('arr5.flat()', arr5.flat());

  

	return <div></div>;
};

export default ArrayMethods;
