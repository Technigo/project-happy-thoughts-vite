import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import moment from "moment";
import "./HappyThought.css";
import HeartOutlinePath from "../assets/icons/heart-outline.svg";
import HeartFilledPath from "../assets/icons/heart-filled.svg";
import { IconLoading } from "../assets/icons/IconLoading";

const HeartOutline = () => {
  return <img alt="" src={HeartOutlinePath} />;
};

const HeartFilled = () => {
  return <img alt="" src={HeartFilledPath} />;
};

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
                aria-label={
                  isAlreadyLiked
                    ? "You've liked this happy thought already :)"
                    : "Like this happy thought"
                }
                onClick={onLike}
                aria-disabled={isProcessing || isLoading || isAlreadyLiked}
                className={
                  isAlreadyLiked
                    ? "happy-thought__like-btn is-disabled"
                    : "happy-thought__like-btn"
                }
              >
                {isProcessing ? (
                  <IconLoading color="black" />
                ) : isAlreadyLiked ? (
                  <HeartFilled />
                ) : (
                  <HeartOutline />
                )}
              </button>
              <p>
                <i>x</i>
                {likes}
              </p>
            </>
          )}
        </div>
        <div className="happy-thought__timestamp">
          {isLoading ? (
            <Skeleton width={100} containerClassName="skeleton-align-right" />
          ) : (
            timestamp && moment(timestamp).fromNow()
          )}
        </div>
      </footer>
    </article>
  );
};
