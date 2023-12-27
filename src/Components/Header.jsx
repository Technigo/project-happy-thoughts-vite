import Lottie from "lottie-react";
import happy from "../assets/animation/happy.json";

export const Header = () => {
  const style = { height: 400 };
  return (
    <div className="header">
      <h1 className="title">Project Happy Thoughts</h1>
      <h2>Week 7 Project</h2>
      <Lottie animationData={happy} style={style} />
    </div>
  );
};

export default Header;
