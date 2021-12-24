import React from 'react';
import { useScores } from './../hooks/index';
import ScoreRow from './ScoreRow';

const Scores = () => {
	const { scores } = useScores();
	return (
		<>
			{scores.map((score, index) => (
				<ScoreRow
					key={index}
					index={index}
					country={score[0]}
					average={score[1]}
				/>
			))}
		</>
	);
};

export default Scores;
