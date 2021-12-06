import {
	FETCH_PRODUCT_FULLFIELD,
	FETCH_PRODUCT_PENDING,
	FETCH_PRODUCT_REJECTED,
} from './../actions/index';
const initialState = {
	products: [],
	loading: false,
	error: '',
};

const productReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_PRODUCT_PENDING:
			return {
				products: [],
				loading: true,
				error: '',
			};
		case FETCH_PRODUCT_FULLFIELD:
			return {
				products: action.payload.products,
				loading: false,
				error: '',
			};
		case FETCH_PRODUCT_REJECTED:
			return {
				products: [],
				loading: false,
				error: action.payload.error,
			};
		default:
			return state;
	}
};

export default productReducer;
