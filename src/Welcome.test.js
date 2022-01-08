/* eslint-disable testing-library/prefer-screen-queries */
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import Welcome from './Welcome';

test('renders Welcome title', () => {
	const { getByText } = render(<Welcome />);
	const headerText = getByText('Welcome Component');
	expect(headerText).toBeInTheDocument();
});
