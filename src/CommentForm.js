import { findDOMNode } from 'react-dom';
const React = require('react');
var createClass = require('create-react-class');

const CommentForm = createClass({
	getInitialState() {
		return {
			totalComments: 0,
		};
	},
	handleSubmit(e) {
		e.preventDefault();
		console.log('this.refs', this.refs);
		var author = findDOMNode(this.refs.author).value.trim();
		var text = findDOMNode(this.refs.text).value.trim();
		if (!text || !author) {
			return;
		}
		console.log({ author, text });
	},

	clearAsyn() {
		setInterval(() => {
			findDOMNode(this.refs.author).value = '';
			findDOMNode(this.refs.text).value = '';
		}, 2000);
	},

	incComment() {
		this.setState((pre) => ({
			...pre,
			totalComments: pre.totalComments + 1,
		}));
	},

	incCommentBy(value) {
		this.setState((pre) => ({
			...pre,
			totalComments: pre.totalComments + value,
		}));
	},

	UNSAFE_componentWillMount() {
		console.log('I am Mounted');
	},

	render() {
		console.log('this', this);
		return (
			<form className="commentForm" onSubmit={this.handleSubmit}>
				<input type="text" placeholder="Your name" ref="author" />
				<input type="text" placeholder="Say something..." ref="text" />
				<input type="submit" value="Post" />
				<button onClick={this.clearAsyn}>Clear Form Async</button>
				<h1>Comments: {this.state.totalComments}</h1>
				<button onClick={this.incComment}>Inc Comment</button>
				<button onClick={() => this.incCommentBy(2)}> + 2</button>
			</form>
		);
	},
});

export default CommentForm;
