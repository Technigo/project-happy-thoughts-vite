import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../CreateHappyThought.css";

export const CreateHappyThoughtSkeleton: React.FC = () => {
  return (
    <SkeletonTheme
      baseColor="#bbb"
      highlightColor="#ccc"
    >
      <div className="create-thought__container">
        <h1 className="create-thought__title">
          <Skeleton
            containerClassName="flex-1"
            width={240}
            height={28}
          />
        </h1>
        <form className="create-thought__form">
          <label>
            <Skeleton height={18} />
          </label>
          <Skeleton height={135} />
          <Skeleton
            width={50}
            containerClassName="skeleton-align-right"
          />
          <Skeleton height={57} />
        </form>
      </div>
    </SkeletonTheme>
  );
};
