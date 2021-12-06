import React, { memo } from 'react';

const MemoCounter = ({ count }) => {
	console.log('Rendering MemoCounter');
	return (
		<div className="counter">
			<h1>Hi</h1>
			<h2>{count}</h2>
		</div>
	);
};

export default memo(MemoCounter);
