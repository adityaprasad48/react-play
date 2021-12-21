import { useState } from 'react';

const Counter = () => {
	const [count, setCount] = useState(0);

	const handleInc = () => {
		setCount((count) => count + 1);
	};

	if (count === 5) {
		return new Error('Counter Exceed Limit ....');
	}

	return <button onClick={handleInc}>Click to InC {count} </button>;
};

export default Counter;
