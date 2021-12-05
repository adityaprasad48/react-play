import React from 'react';
import { LoggedInContext } from './../../contexts/LoggedInContext';

const User = () => {
	return (
		<div style={{ marginTop: '20px' }}>
			<LoggedInContext.Consumer>
				{(userCtx) => {
					console.log('userCtx', userCtx);
					return (
						<h1
							style={{
								cursor: 'pointer',
								display: 'inline',
								border: '2px solid green',
							}}
						>
							{userCtx.user.loggedIn ? (
								<span
									onClick={(e) => {
										e.stopPropagation();
										userCtx.handleLogOut();
									}}
								>
									Log Out
								</span>
							) : (
								<span
									onClick={(e) => {
										e.stopPropagation();
										userCtx.handleLogIn();
									}}
								>
									Log In
								</span>
							)}
						</h1>
					);
				}}
			</LoggedInContext.Consumer>
		</div>
	);
};

export default User;
