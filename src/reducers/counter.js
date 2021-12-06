const initialState = {
	count: 1,
	date: null,
};

const counterReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'INCREMENT':
			{
				console.log('Inc')
				return {
					...state,
					count: state.count + 1,
				};
			}
		case 'DECREMENT':
			return {
				...state,
				count: state.count - 1,
			};
		case 'RESET':
			return {
				...state,
				count: initialState.count,
			};
		default:
			return state;
	}
};
export default counterReducer;
