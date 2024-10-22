import Skeleton from "react-loading-skeleton";
import moment from "moment";
import "react-loading-skeleton/dist/skeleton.css";
import "./HappyThought.css";
import HeartOutlinePath from "../assets/heart-outline.svg";
import HeartFilledPath from "../assets/heart-filled.svg";
import { IconLoading } from "../assets/icons/IconLoading";

const HeartOutline = () => {
  return <img alt="" src={HeartOutlinePath} />;
};

const HeartFilled = () => {
  return <img alt="" src={HeartFilledPath} />;
};

console.log(HeartFilled);

export const HappyThought = ({
  message,
  likes,
  timestamp,
  isLoading,
  onLike,
  isProcessing,
  isAlreadyLiked,
}) => {
  return (
    <article className="happy-thought">
      <h2 className="happy-thought__title">
        {isLoading ? <Skeleton /> : message}
      </h2>
      <footer className="happy-thought__footer">
        <div className="happy-thought__likes">
          {isLoading ? (
            <Skeleton width={50} />
          ) : (
            <>
              <button
                onClick={onLike}
                disabled={isProcessing || isLoading || isAlreadyLiked}
                className="happy-thought__like-btn"
              >
                {isProcessing ? (
                  <IconLoading color="black" />
                ) : isAlreadyLiked ? (
                  <HeartFilled />
                ) : (
                  <HeartOutline />
                )}
              </button>
              <span>
                <i>x</i>
                {likes}
              </span>
            </>
          )}
        </div>
        <div className="happy-thought__timestamp">
          {timestamp ? moment(timestamp).fromNow() : <Skeleton width={100} />}
        </div>
      </footer>
    </article>
  );
};
