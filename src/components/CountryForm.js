import React from 'react';
import { useScores } from './../hooks/index';

const CountryForm = ({ country, index }) => {
	const { scores, setScores } = useScores();

	const handleCountryChange = (e, scoreIndex) => {
		let scoresArr = [...scores];
		scoresArr[scoreIndex][0] = e.target.value;
		setScores([...scoresArr]);
	};

	return (
		<div className="country">
			<form>
				The Country:
				<input
					className="country-input"
					type="text"
					value={country}
					onChange={(e) => handleCountryChange(e, index)}
				/>
			</form>
		</div>
	);
};

export default CountryForm;
