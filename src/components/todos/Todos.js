import React, { useContext } from 'react';
import { useLoggedIn } from './../../contexts/LoggedInContext';
import { ThemeContext } from './../../contexts/ThemeContext';

const Todos = () => {
	const { theme, setTheme } = useContext(ThemeContext);

	const toggleTheme = () => {
		let currentTheme = theme;
		if (theme === 'dark') {
			currentTheme = 'light';
		} else {
			currentTheme = 'dark';
		}
		setTheme(currentTheme);
	};

	const user = useLoggedIn();

	console.log({ user });

	return (
		<div>
			<h1
				style={{
					...(theme === 'dark' && {
						background: 'black',
						color: 'white',
					}),
				}}
			>
				Todos List
			</h1>
			<button type="button" onClick={toggleTheme}>
				{theme === 'light' ? 'Dark' : 'Light'}
			</button>
		</div>
	);
};

export default Todos;
