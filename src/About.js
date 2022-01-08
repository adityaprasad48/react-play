/* eslint-disable react/style-prop-object */
import React from 'react';
import { FormattedMessage, FormattedNumber, IntlProvider } from 'react-intl';
import NewComp from './NewComp';
import Welcome from './Welcome';

// Translated messages in French with matching IDs to what you declared
const messagesInFrench = {
	myMessage: "Aujourd'hui, c'est le {ts, date, ::yyyyMMdd}",
};

const messageInHindi = {
	myMessage: "Hi Here c'est le {ts, date, ::yyyyMMdd}",
};

export const About = () => {
	return (
		<IntlProvider messages={messageInHindi} locale="fr" defaultLocale="en">
			<p>
				<FormattedMessage
					id="myMessage"
					defaultMessage="Today is {ts, date, ::yyyyMMdd}"
					values={{ ts: Date.now() }}
				/>
				<br />
				<FormattedNumber value={19.5} style="currency" currency="EUR" />
			</p>
			<NewComp />
			<Welcome />
		</IntlProvider>
	);
};
