import { Component } from 'react';

class Counter extends Component {
	static getDerivedStateFromProps() {
		console.log('getDerivedStateFromProps Child');
		return null;
	}

	componentDidMount() {
		console.log('componentDidMount Child');
	}

	static getSnapshotBeforeUpdate() {
		console.log('getSnapshotBeforeUpdate Child');
		return null;
	}

	shouldComponentUpdate(nextState, nextProps) {
		// shallow comparison here 
		// if there is nested props then it could not work properly
		if (nextProps.count !== this.props.count) {
			return true;
		}
		console.log('shouldComponentUpdate Child');
		// return true if you want to call render method, else false if not
		return false;
	}

	componentDidUpdate() {
		console.log('componentDidUpdate Child');
	}

	componentWillUnmount() {
		console.log('componentWillUnmount Child');
	}

	render() {
		const { count } = this.props;
		return (
			<div className="counter">
				<h1>Hi</h1>
				<h2>{count}</h2>
			</div>
		);
	}
}

export default Counter;
