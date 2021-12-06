import { Component } from 'react';
import PureCounter from './PureCounter';
class CounterParent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			change: true,
			count: 0,
		};
	}

	static getDerivedStateFromProps() {
		console.log('getDerivedStateFromProps Parent');
		return null;
	}

	componentDidMount() {
		console.log('componentDidMount Parent');
	}

	static getSnapshotBeforeUpdate() {
		console.log('getSnapshotBeforeUpdate Parent');
		return null;
	}

	shouldComponentUpdate() {
		console.log('shouldComponentUpdate Child');
		return true;
	}

	componentDidUpdate() {
		console.log('componentDidUpdate Parent');
	}

	componentWillUnmount() {
		console.log('componentWillUnmount Parent');
	}

	handleCount = () => {
		this.setState((pre) => ({
			count: pre.count + 1,
		}));
	};

	render() {
		return (
			<div>
				<h1>Counter Parent</h1>
				{/* <Counter count={this.state.count} />
				 */}
				<PureCounter count={this.state.count} />
				<button type="button" onClick={this.handleCount}>
					Inc
				</button>
			</div>
		);
	}
}

export default CounterParent;
