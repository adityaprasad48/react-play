import React from 'react';
import ReactDOM from 'react-dom';

const PopupPortal = ({ message, isOpen, onClose, children }) => {
	if (!isOpen) return null;

	return ReactDOM.createPortal(
		<div className="modal">
			<div className="content">{children}</div>
			<button onClick={onClose}>Close</button>
		</div>,
		document.body
	);
};

export default PopupPortal;
