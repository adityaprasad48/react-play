import axios from 'axios';
import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { FETCH_PRODUCT_FULLFIELD } from './actions';
import { FETCH_PRODUCT_PENDING, FETCH_PRODUCT_REJECTED } from './actions/index';

const handleInc = () => {
	return (dispatch, getState) => {
		setTimeout(() => {
			dispatch({ type: 'INCREMENT' });
		}, 1000);
	};
};

const fetchProducts = () => {
	return (dispatch, getState) => {
		dispatch({ type: FETCH_PRODUCT_PENDING });
		axios
			.get('https://fakestoreapi.com/products')
			.then((res) => {
				const products = res.data;
				console.log({ products });
				dispatch({
					type: FETCH_PRODUCT_FULLFIELD,
					payload: {
						products,
					},
				});
			})
			.catch((error) => {
				dispatch({ type: FETCH_PRODUCT_REJECTED, error: error.message });
			});
	};
};

const Posts = () => {
	// With a plain basic Redux store, you can only do simple synchronous updates by dispatching an action. Middleware extends the store's abilities, and lets you write async logic that interacts with the store.

	// Thunks are the recommended middleware for basic Redux side effects logic, including complex synchronous logic that needs access to the store, and simple async logic like AJAX requests.

	// Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch and getState as parameters.

	// An action creator that returns a function to perform asynchronous dispatch:

	const count = useSelector((state) => state.counter.count);
	const products = useSelector((state) => state.product.products);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);

	return (
		<div>
			<h1>{count}</h1>
			<button type="button" onClick={() => dispatch(handleInc())}>
				Inc
			</button>
			<h1>Products</h1>
			<div>
				{products.map((product, index) => (
					<div key={index}>
						<p>{product.title}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default connect(null, { handleInc })(Posts);
