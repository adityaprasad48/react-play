import { Component } from 'react';

class SweetDate extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentDate: '',
			hide: false,
		};
		this.changeDate = this.changeDate.bind(this);
		this.hideDate = this.hideDate.bind(this);
	}

	changeDate() {
		let date = Date.now();
		this.setState((pre) => ({
			...pre,
			currentDate: date,
		}));
	}

	// hideDate = () => {
	// 	this.setState((pre) => ({
	// 		...pre,
	// 		hide: true,
	// 	}));
	// };

	hideDate() {
		this.setState((pre) => ({
			...pre,
			hide: true,
		}));
	}

	render() {
		return (
			<div className="p-10 border border-thin border-red">
				{this.state.hide && (
					<h1 className="text-3xl font-bold underline">
						Date : {this.state.currentDate}
					</h1>
				)}
				<button onClick={this.changeDate}>Change Date</button>
				<button
					className="px-2 text-white bg-red font-bold"
					style={{ border: '1px solid red' }}
					onClick={this.hideDate}
				>
					{this.state.hide ? 'Hide' : 'Show'} Date
				</button>
			</div>
		);
	}
}

export default SweetDate;
