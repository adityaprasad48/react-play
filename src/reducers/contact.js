const initialState = {
	isDone: false,
};

const contactReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'CONTACT_ADDED': {
			console.log('action called');
			return {
				...state,
				isDone: action.payload.isDone,
			};
		}
		default:
			return state;
	}
};

export default contactReducer;
