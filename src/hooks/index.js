import { useContext } from 'react';
import { ScoreContext } from '../contexts/ScoresProviders';

export const useScores = () => useContext(ScoreContext);
