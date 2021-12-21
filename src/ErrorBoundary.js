import React from 'react';

class MyErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isError: false,
		};
	}

	static getDerivedStateFromError(error) {
		return { error: error.toString(), isError: true };
	}

	componentDidCatch(error, info) {
		this.props.onError(error, info);
	}

	render() {
		console.log({ state: this.state });
		const { error, isError } = this.state;
		const { children, FallbackComp } = this.props;

		// console.log('error', this.state.error);

		if (isError) {
			return <FallbackComp {...this.state} />;
		}

		return children;
	}
}

export default MyErrorBoundary;
