import React from 'react';
import ReactDOM from 'react-dom';
import ScoresProviders from './contexts/ScoresProviders';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Web from './Web';

ReactDOM.render(
	<React.StrictMode>
		<ScoresProviders>
			<Web />
		</ScoresProviders>
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();
