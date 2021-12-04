import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


const Home = () => {
	const count = useSelector((state) => state.counter.count);
	const dispatch = useDispatch();

	const handleInc = () => {
		dispatch({ type: 'INCREMENT' });
	};

	const handleDec = () => {
		dispatch({ type: 'DECREMENT' });
	};

	return (
		<div>
			<h1>Home</h1>
			<h1>Count: {count}</h1>
			<button className="btn btn-add" onClick={handleInc}>
				Inc
			</button>
			<button className="btn btn-dec" onClick={handleDec}>
				Dec
			</button>
		</div>
	);
};

export default Home;
