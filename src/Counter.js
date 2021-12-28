import { Component } from 'react';
class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};
		this.timer = null;
	}

	// unmountComponentAtNode top-level property
	// Returns false if no component was mounted in the container specified via render, otherwise returns true .

	componentDidMount() {
		this.timer = setInterval(() => {
			this.setState((pre) => ({
				count: pre.count + 1,
			}));
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	render() {
		return <h1>Counter: {this.state.count}</h1>;
	}
}

export default Counter;
