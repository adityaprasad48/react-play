import PropTypes from 'prop-types';

const WelcomeCard = ({ name }) => {
	return <div>Hello, {name}</div>;
};

WelcomeCard.propTypes = {
	name: PropTypes.string,
};

export default WelcomeCard;
