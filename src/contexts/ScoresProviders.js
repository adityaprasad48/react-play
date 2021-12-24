import axios from 'axios';
import React, { createContext, useCallback, useState } from 'react';

const testScores = [
	['Pakistan', 23],
	['Pakistan', 127],
	['India', 3],
	['India', 71],
	['Australia', 31],
	['India', 22],
	['Pakistan', 81],
];

export const ScoreContext = createContext({ scores: [] });

const ScoresProviders = ({ children }) => {
	const [scores, setScores] = useState([]);
	const [isScoreLoding, setIsScoreLoading] = useState(false);

	const fetchServerData = useCallback(() => {
		axios
			.get('https://assessments.reliscore.com/api/cric-scores/')
			.then((res) => {
				setScores(res.data);
				setIsScoreLoading(true);
			})
			.catch((err) => {
				setIsScoreLoading(false);
			});
	}, []);

	const loadTestData = () => {
		setScores(testScores);
	};

	return (
		<ScoreContext.Provider
			value={{
				fetchServerData,
				scores,
				setScores,
				loadTestData,
				isScoreLoding,
			}}
		>
			{children}
		</ScoreContext.Provider>
	);
};

export default ScoresProviders;
