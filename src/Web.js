import React, { useEffect, useState } from 'react';
import RadioInput from './components/RadioInput';
import Scores from './components/Scores';
import { useScores } from './hooks/index';
import './webapp.css';

const Web = () => {
	const [dataType, setDataType] = useState('test');
	const { fetchServerData, loadTestData } = useScores();

	const handleDataChange = (value) => {
		if (value === 'server') {
			fetchServerData();
		}
		setDataType(value);
	};

	useEffect(() => {
		if (dataType === 'test') {
			loadTestData();
		}
	}, [dataType, loadTestData]);

	return (
		<div className="container">
			<form>
				Source of data:
				<RadioInput
					id="src-test"
					type="radio"
					name="data-source"
					label="Test Data"
					value={dataType}
					checked={dataType === 'test'}
					onChange={() => handleDataChange('test')}
				/>
				<RadioInput
					id="src-server"
					type="radio"
					name="data-source"
					label="Server Data"
					value={dataType}
					checked={dataType === 'server'}
					onChange={() => handleDataChange('server')}
				/>
			</form>

			<Scores />
		</div>
	);
};

export default Web;
