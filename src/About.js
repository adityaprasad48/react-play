import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const About = () => {
	const [contact, setContact] = useState({
		name: '',
		age: '',
	});

	const isDone = useSelector((state) => state.contact.isDone);
	const dispatch = useDispatch();

	const state = useSelector((state) => state);

	const handleChange = (e) => {
		setContact((pre) => ({
			...pre,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch({
			type: 'CONTACT_ADDED',
			payload: {
				isDone: !isDone,
			},
		});
		console.log({ contact });
	};

	console.log({ state });

	console.log({ isDone });

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
			{isDone ? (
				<h1>Form is Submitted Successfully</h1>
			) : (
				<h1>Please Fill the Form</h1>
			)}
		</div>
	);
};
