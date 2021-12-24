import React from 'react';

const Regex = () => {
	// THIS IS WHAT YOU NEED
	const count = (str) => {
		const re = /YOUR_PATTERN_HERE/g;
		return ((str || '').match(re) || []).length;
	};

	console.log("count('Aditya is here')", count('Aditya is here'));

	return <div>
    
  </div>;
};

export default Regex;
