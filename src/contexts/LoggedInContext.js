import React, { useContext, useState } from 'react';

// When there's no Provider, the defaultValue argument is used for function createContext. This is helpful for testing components in isolation without wrapping them, or testing it with different values from Provider.
export const LoggedInContext = React.createContext({
	loggedIn: true,
	default: true,
});

const LoggedInProvider = ({ children }) => {
	const [user, setUser] = useState({
		loggedIn: false,
	});

	const handleLogIn = () => {
		setUser({
			loggedIn: true,
		});
	};

	const handleLogOut = () => {
		setUser({
			loggedIn: false,
		});
	};

	return (
		<LoggedInContext.Provider
			value={{
				user,
				handleLogIn,
				handleLogOut,
			}}
		>
			{children}
		</LoggedInContext.Provider>
	);
};

export default LoggedInProvider;

export const useLoggedIn = () => useContext(LoggedInContext);
