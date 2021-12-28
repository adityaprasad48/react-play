import { useEffect, useState } from 'react';

const MiscLen = () => {
	const [count, setCount] = useState(0);

	// const handleCount = () => {
	// 	setCount((prev) => prev + 1);
	// 	setCount((prev) => prev + 1);
	// };

	const handleCount = () => {
		// const a = setCount(count + 1);
		// const b = setCount((prev) => prev + 1);

		// console.log(typeof a);
		// console.log(typeof b);

		// setCount(count + 1);
		setCount(count + 1);
	};

	console.log('1');

	useEffect(() => {
		console.log('2');
		return () => {
			console.log('3');
		};
	}, [count]);

	console.log('4');

	return (
		<>
			<button onClick={handleCount}>increase</button>

			{count}
		</>
	);
};

export default MiscLen;
