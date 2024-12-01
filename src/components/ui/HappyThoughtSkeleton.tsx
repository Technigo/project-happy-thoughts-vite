import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../HappyThought.css";

export const HappyThoughtSkeleton: React.FC = () => {
  return (
    <article className="happy-thought">
      <h2 className="happy-thought__title">
        <Skeleton />
      </h2>
      <footer className="happy-thought__footer">
        <div className="happy-thought__likes">
          <Skeleton width={50} />
        </div>
        <div className="happy-thought__timestamp">
          <Skeleton
            width={100}
            containerClassName="skeleton-align-right"
          />
        </div>
      </footer>
    </article>
  );
};
