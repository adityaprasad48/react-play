import React from 'react';

const Home = () => {
	const nums = [0, 2, 22, 1, 11, 0];

	const formateArr = (nums) => {
		const zeroArr = [];
		const newArr = [];

		for (let num of nums) {
			if (num === 0) {
				zeroArr.push(0);
			} else {
				newArr.push(num);
			}
		}

		for (let i = 0; i < newArr.length; i++) {
			// console.log(newArr[i]);
			for (let j = i; j < newArr.length; j++) {
				if (newArr[i] < newArr[j + 1]) {
					let arrVal;
					arrVal = newArr[i];
					newArr[i] = newArr[j + 1];
					newArr[j + 1] = arrVal;
					// console.log('inside J', newArr[i]);
				}
			}
		}

		return [...newArr, ...zeroArr];
	};

	

	console.log('formatedArr', formateArr(nums));

	// [1,2, 11, 22, 0, 0]

	return (
		<div className="App">
			<h1>Hello CodeSandbox</h1>
			<h2>Start editing to see some magic happen!</h2>
		</div>
	);
};

export default Home;
