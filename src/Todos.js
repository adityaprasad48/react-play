import { Component } from 'react';
class Todos extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [],
		};
	}

	// componentWillMount: Invoked before initial rendering. Useful for making AJAX calls. For instance, if you need to grab the user information to populate the view, this is a good place to do it. If you do have an AJAX call, it would be good to render an indeterminate loading bar until the AJAX call finishes. I've also used componentWillMount to call setInterval and to disable Chrome's drag and drop functionality before the page renders.

	// componentDidMount: Invoked immediately after the component renders. Useful if you need to have access to a DOM element. For instance I've used it to disable copy and pasting into a password input field. Great for debugging if you need want to know the state of the component.

	// componentWillReceiveProps: Invoked when component receives new props. Useful for setting the state with the new props without re-rendering.

	UNSAFE_componentWillMount() {
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then((res) => res.json())
			.then((res) => {
				console.log('res.data');
				this.setState((pre) => ({ ...pre, todos: res }));
			});
	}

	render() {
		return (
			<div>
				<h1>Todos</h1>
				<ul>
					{this.state.todos.slice(0, 10).map((todo) => (
						<li key={todo.id}>{todo.title}</li>
					))}
				</ul>
			</div>
		);
	}
}

export default Todos;
