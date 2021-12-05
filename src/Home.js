import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	decrementCounter,
	incrementCounter,
	resetCounter,
} from './reducers/counterSlice';

const Home = () => {
	const count = useSelector((state) => state.counter.count);
	const dispatch = useDispatch();
	console.log({ count });

	const handleInc = () => {
		dispatch(incrementCounter());
	};

	const handleDec = () => {
		dispatch(decrementCounter());
	};

	const handleReset = () => {
		dispatch(resetCounter());
	};

	return (
		<div>
			<h1>Home</h1>
			<button type="button" onClick={handleInc}>
				Inc
			</button>
			<h1>{count}</h1>
			<button type="button" onClick={handleDec}>
				Dec
			</button>
			<button type="button" onClick={handleReset}>
				Reset
			</button>
		</div>
	);
};

export default Home;
