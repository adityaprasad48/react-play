import React from 'react';

const CommentInput = ({ text, handleTextChange, handleSubmit }) => {
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type="text" value={text} onChange={handleTextChange} />
				<button type="submit">
					<span>💨</span>
				</button>
			</form>
		</div>
	);
};

export default CommentInput;
