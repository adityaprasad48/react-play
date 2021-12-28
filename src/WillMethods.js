import { Component } from 'react';
class WillMethods extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			age: '',
			country: '',
		};

		this._changeAge = this._changeAge.bind(this);
		this._changeName = this._changeName.bind(this);
		this._changeCountry = this._changeCountry.bind(this);
	}
	// The components in React will re-render only if the state of the component or the props passed to it changes but if we need to re-render the component if some data changes then we will use forceUpdate() method of React. Calling the forceUpdate() will forcibly re-render the component and thus calls the render() method of the component skipping the shouldComponentUpdate() method.
	// Tip: Normally, avoid all uses of forceUpdate() and only read from this.props and this.state in render().

	componentWillUpdate(newProps, newState) {
		console.log('Called before the render() Method');
		console.log('newProps', newProps);
		console.log('newState', newState);
	}

	// componentDidUpdate(preProps, preState) {
	// 	console.log('Called after the render() Method');
	// 	console.log('preProps', preProps);
	// 	console.log('preState', preState);
	// }

	// if you don't this don't recongnize setState
	// TypeError: Cannot read properties of undefined (reading 'setState')

	_changeAge(e) {
		this.setState((pre) => ({
			...pre,
			age: e.target.value,
		}));
	}

	_changeName(e) {
		this.setState((pre) => ({
			...pre,
			name: e.target.value,
		}));
	}

	_changeCountry(e) {
		this.setState((pre) => ({
			...pre,
			country: e.target.value,
		}));
	}

	componentDidUpdate(preProps, preState) {
		this.commitAutoSave();
		console.log('updated');
		// after render state means newState

		// console.log({ preState, isEqual: preState.name !== this.state.name });
		// if (
		// 	preState.name !== this.state.name &&
		// 	preState.age !== this.state.age &&
		// 	preState.country !== this.state.country
		// ) {

		// }
	}

	// componentDidUpdate(prevProps) {
	// 	// Typical usage (don't forget to compare props):
	// 	if (this.props.userID !== prevProps.userID) {
	// 		this.fetchData(this.props.userID);
	// 	}
	// }

	commitAutoSave() {
		console.log('I am saving you changes......');
	}

	render() {
		return (
			<div>
				<h1>WillMethods</h1>
				<form>
					<input
						type="text"
						value={this.state.name}
						onChange={this._changeName}
						placeholder="Name"
					/>
					<input
						type="text"
						value={this.state.age}
						onChange={this._changeAge}
						placeholder="Age"
					/>
					<input
						type="text"
						value={this.state.country}
						onChange={this._changeCountry}
						placeholder="Country"
					/>
				</form>
			</div>
		);
	}
}

export default WillMethods;
