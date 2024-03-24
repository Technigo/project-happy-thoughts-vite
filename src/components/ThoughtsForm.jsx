import PropTypes from 'prop-types';

export const ThoughtsForm = ({ newThought, onThoughtChange, onThoughtSubmit }) => {
	return (
		<form className="shadow" onSubmit={onThoughtSubmit}>
			<p>What&apos;s making you happy right now?</p>
			<textarea
				placeholder="Type your happy thought here..."
				value={newThought}
				onChange={onThoughtChange}
				cols="40"
				rows="2"
			/>
			<div className="happy-footer-button">
				<button type="submit"> ❤️ Send Happy Thought ❤️ </button>
			</div>
		</form>
	);
};
// define the prop types for the ThoughtsForm component
ThoughtsForm.propTypes = {
	newThought: PropTypes.string.isRequired,
	onThoughtChange: PropTypes.func.isRequired,
	onThoughtSubmit: PropTypes.func.isRequired,
};
