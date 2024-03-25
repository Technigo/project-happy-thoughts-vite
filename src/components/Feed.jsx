import PropTypes from "prop-types";
import ThoughtForm from "./ThoughtForm";
import ThoughtList from "./ThoughtList";

const Feed = ({ thoughts, addThought }) => {
  return (
    <main>
      <ThoughtForm addThought={addThought} />
      <ThoughtList thoughts={thoughts} />
    </main>
  );
};

Feed.propTypes = {
  thoughts: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
      hearts: PropTypes.number,
      createdAt: PropTypes.string,
    })
  ).isRequired,
  addThought: PropTypes.func.isRequired,
};

export default Feed;