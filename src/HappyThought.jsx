import LikeButton from "./components/LikeButton";
import moment from "moment";

const HappyThought = ({ userMessage, onLike }) => {
  const timeAgo = moment(userMessage.createdAt).fromNow();

  return (
    <div>
      <p>
        {userMessage.message} <span>Likes: {userMessage.hearts}</span>{" "}
        <span>{timeAgo}</span>
      </p>

      <LikeButton userMessageId={userMessage._id} onLike={onLike} />
    </div>
  );
};

export default HappyThought;
