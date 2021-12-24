import React from 'react';
import CountryForm from './CountryForm';

const ScoreRow = ({ country, average, index }) => {
	return (
		<div className="row">
			<CountryForm country={country} index={index} />
			<div className="average">The Average: {average}</div>
			<div className="horiz-bar" style={{ width: `${average * 2}px` }}>
				&nbsp;
			</div>
		</div>
	);
};

export default ScoreRow;
