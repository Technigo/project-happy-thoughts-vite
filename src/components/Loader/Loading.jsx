import Lottie from "lottie-react";
import Loader from "../../assets/Loader.json";

export const Loading = () => {
  const options = {
    animationData: Loader,
    style: {
      margin: -40,
      height: 150,
    },
    loop: true,
  };

  return (
    <Lottie
      animationData={options.animationData}
      style={options.style}
      loop={options.loop}
    />
  );
};
