import Lottie from "lottie-react";
import animationData from "../animation.json";

export const Loading = () => {
  return (
    <div>
      <Lottie animationData={animationData} />
    </div>
  );
};
