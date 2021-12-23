import { useReducer } from 'react';
import { useFriendStatus } from './hooks/useFriendStatus';

const Counter = () => {
	const counterReducer = (state, action) => {
		switch (action.type) {
			case 'INC': {
				return {
					...state,
					count: state.count + 1,
				};
			}
			case 'DEC': {
				return {
					...state,
					count: state.count - 1,
				};
			}
			default: {
				return state;
			}
		}
	};

	const [countState, dispatch] = useReducer(counterReducer, { count: 0 });

	const onlineStatus = useFriendStatus(countState.count);

	// console.log({ count: countState.count, onlineStatus });

	return (
		<div className="App">
			<h1>Count: {countState.count}</h1>
			<button
				type="button"
				onClick={() => {
					dispatch({ type: 'INC' });
				}}
			>
				Inc
			</button>
			<button
				type="button"
				onClick={() => {
					dispatch({ type: 'DEC' });
				}}
			>
				Dec
			</button>
			<h1>FriendOnlne: {onlineStatus ? 'Yes' : 'No'}</h1>
			<h2>Start editing to see some magic happen!</h2>
		</div>
	);
};

export default Counter;
