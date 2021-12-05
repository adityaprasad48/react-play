import { useState } from 'react';

const withCounter = (Component) => {
	const Wrapper = (props) => {
		const [count, setCount] = useState(0);

		const handleInc = () => {
			console.log('cla');
			setCount((pre) => pre + 1);
		};

		return <Component {...props} count={count} increment={handleInc} />;
	};

	return Wrapper;
};

export default withCounter;
