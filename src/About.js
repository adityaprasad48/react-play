import React, { useState } from 'react';
import { connect } from 'react-redux';

const About = (props) => {
	const [contact, setContact] = useState({
		name: '',
		age: '',
	});

	console.log({ props });
	// const isDone = useSelector((state) => state.contact.isDone);
	// const dispatch = useDispatch();

	// const state = useSelector((state) => state);

	const handleChange = (e) => {
		setContact((pre) => ({
			...pre,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		props.contactAdded(props.isDone);
		console.log({ contact });
	};

	return (
		<div>
			<h1>About</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="name">Name</label>
					<input
						type="text"
						id="name"
						name="name"
						value={contact.name}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor="age">Age</label>
					<input
						type="text"
						id="age"
						name="age"
						value={contact.age}
						onChange={handleChange}
					/>
				</div>
				<button type="submit">Submit</button>
			</form>

			{props.isDone ? (
				<h1>Form is Submitted Successfully</h1>
			) : (
				<h1>Please Fill the Form</h1>
			)}
		</div>
	);
};

const mapStateToProps = (state) => ({ isDone: state.contact.isDone });

// with Action creators
// const mapDispatchToProps = {
//   addTodo,
//   deleteTodo,
//   toggleTodo,
// }

const mapDispatchToProps = (dispatch) => {
	return {
		// dispatching plain actions
		increment: () => dispatch({ type: 'INCREMENT' }),
		decrement: () => dispatch({ type: 'DECREMENT' }),
		reset: () => dispatch({ type: 'RESET' }),
		contactAdded: (isDone) =>
			dispatch({
				type: 'CONTACT_ADDED',
				payload: {
					isDone: !isDone,
				},
			}),
	};
};

// As the first argument passed in to connect , mapStateToProps is used for selecting the part of the data from the store that the connected component needs. It's frequently referred to as just mapState for short. It is called every time the store state changes.

// export default MyComponent

// Conventionally called mapDispatchToProps, this second parameter to connect() may either be an object, a function, or not supplied.

// Your component will receive dispatch by default, i.e., when you do not supply a second parameter to connect():

// connect methods provides dispatch method in component as props

// export default connect()(About)

// export default connect(mapStateToProps)(MyComponent);
// export default connect(mapStateToProps, null)(MyComponent);

// export default connect(null, mapDispatchToProps)(MyComponent);

export default connect(mapStateToProps, mapDispatchToProps)(About);
