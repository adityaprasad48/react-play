import React, { useState } from 'react';
import CommentHead from './components/CommentHead';
import CommentInput from './components/CommentInput';
import CommentList from './components/CommentList';

const CommentPage = () => {
	const [text, setText] = useState('');
	const [comments, setComment] = useState([]);

	const handleTextChange = (e) => {
		setText(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (text) {
			const comment = {
				text,
				liked: 0,
				thumb_up: 0,
				boomed: 0,
				createAt: Date.now(),
			};
			setComment([...comments, comment]);
			setText('');
		}
	};

	const handleCommentUpdate = (responceType, commentIndex) => {
		console.log({ responceType, commentIndex });
		const commentArr = [...comments];
		const foundComment = commentArr.find(
			(comment, index) => index === commentIndex
		);
		if (foundComment) {
			foundComment[responceType] += 1;
		}
		setComment(commentArr);
		console.log({ foundComment });
	};

	console.log({ comments });

	return (
		<div>
			<CommentHead />
			<CommentInput
				text={text}
				handleTextChange={handleTextChange}
				handleSubmit={handleSubmit}
			/>
			<CommentList
				comments={comments}
				handleCommentUpdate={handleCommentUpdate}
			/>
		</div>
	);
};

export default CommentPage;
