import { HeartButton } from "./HeartButton";
import { formatTimeAgo } from "../utils/api";

export const MessageFooter = ({
  thoughtId,
  hearts,
  createdAt,
  handleHeartClick,
  isLiked,
}) => (
  <div className="thought-footer">
    <HeartButton
      thoughtId={thoughtId}
      hearts={hearts}
      handleHeartClick={handleHeartClick}
      isLiked={isLiked}
    />
    <li>{formatTimeAgo(createdAt)}</li>
  </div>
);
