import React from 'react';

const CommentList = ({ comments, handleCommentUpdate }) => {
	return (
		<div>
			<ul>
				{comments.map((comment, index) => (
					<li>
						<div>
							<div>{comment.text}</div>
							<div>
								<button onClick={() => handleCommentUpdate('like', index)}>
									<span>❤</span>
								</button>
								<button onClick={() => handleCommentUpdate('thumb_up', index)}>
									<span>👍</span>
								</button>
								<button onClick={() => handleCommentUpdate('boomed', index)}>
									<span>💥</span>
								</button>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default CommentList;
