import React from 'react';
import CommentForm from './CommentForm';
import Counter from './Counter';
import Todos from './Todos';
import UnMountContainer from './UnMountContainer';
import WillMethods from './WillMethods';

export const About = () => {
	return (
		<div>
			<h1>About</h1>
			<Counter />
			<CommentForm />
			<UnMountContainer />
			<WillMethods />
			<Todos />
		</div>
	);
};
