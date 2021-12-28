import { Component } from 'react';
import ReactDOM from 'react-dom';

class UnMountContainer extends Component {
	removeContainer = () => {
		alert(ReactDOM.unmountComponentAtNode(document.getElementById('root')));
		// alert(
		// 	ReactDOM.unmountComponentAtNode(document.getElementById('container'))
		// );
	};

	render() {
		return (
			<button type="button" onClick={this.removeContainer}>
				Remove Root Node
			</button>
		);
	}
}

export default UnMountContainer;
