import React, { useState } from 'react';
import PopupPortal from './PopupPortal';

const Home = () => {
	const [open, setOpen] = useState(false);
	return (
		<div>
			<h1>Home</h1>
			<button onClick={() => setOpen(true)}>Open Model</button>
			<PopupPortal isOpen={open} onClose={() => setOpen(false)}>
				<div className="px-2 bg-gray-400 text-white">
					<h1 className="font-semibold text-white">Portal is here</h1>
				</div>
			</PopupPortal>
			{/* <SweetDate /> */}
		</div>
	);
};

export default Home;
