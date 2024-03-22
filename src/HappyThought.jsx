import LikeButton from "./components/LikeButton";
import moment from "moment";
import PropTypes from "prop-types";

const HappyThought = ({ userMessage, onLike }) => {
  const timeAgo = moment(userMessage.createdAt).fromNow();

  return (
    <div className="happy-message">
      <p>{userMessage.message}</p>
      <div>
        <LikeButton userMessageId={userMessage._id} onLike={onLike} />
        <span className="like-counter"> x {userMessage.hearts}</span>
        <span className="time-counter">{timeAgo}</span>
      </div>
    </div>
  );
};

export default HappyThought;

HappyThought.propTypes = {
  userMessage: PropTypes.object.isRequired,
  onLike: PropTypes.func.isRequired,
};
