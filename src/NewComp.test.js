/* eslint-disable testing-library/render-result-naming-convention */
import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
// test utils provided by react dom isElement(), mockComponent() etc.
// import * as TestUtils from 'react-dom/test-utils';
import NewComp from './NewComp';

describe('PanelHead test suites', () => {
	it('t-1', () => {
		const renderer = new ShallowRenderer();

		renderer.render(<NewComp />);

		const result = renderer.getRenderOutput();

		expect(result.type).toBe('div');

		expect(result.props.children).toEqual([
			<h1>The formated date is date</h1>,
			<h1>New Comp Test</h1>,
		]);
	});
});
