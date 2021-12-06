import { PureComponent } from 'react';

class PureCounter extends PureComponent {
	render() {
    
		console.log('rendering PureComponent');
		const { count } = this.props;

		return (
			<div className="counter">
				<h1>Hi</h1>
				<h2>{count}</h2>
			</div>
		);
	}
}

export default PureCounter;
