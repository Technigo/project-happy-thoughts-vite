import PropTypes from 'prop-types';

export const ThoughtsForm = ({ newThought, onThoughtChange, onThoughtSubmit }) => {
	return (
		<form onSubmit={onThoughtSubmit}>
			<h1>What is making you happy right now?</h1>
			<textarea
				placeholder="Type your happy thought here..."
				value={newThought}
				onChange={onThoughtChange}
			/>
			<button type="submit">❤️ Send Happy Thought ❤️</button>
		</form>
	);
};
// define the prop types for the ThoughtsForm component
ThoughtsForm.propTypes = {
	newThought: PropTypes.string.isRequired,
	onThoughtChange: PropTypes.func.isRequired,
	onThoughtSubmit: PropTypes.func.isRequired,
};
