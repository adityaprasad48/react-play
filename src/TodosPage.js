import React from 'react';
import Todos from './components/todos/Todos';
import User from './components/todos/User';
import LoggedInProvider from './contexts/LoggedInContext';
import { ThemeProvider } from './contexts/ThemeContext';

const TodosPage = () => {
	return (
		<div>
			<ThemeProvider>
				<LoggedInProvider>
					<Todos />
					<User />
				</LoggedInProvider>
			</ThemeProvider>
		</div>
	);
};

export default TodosPage;
