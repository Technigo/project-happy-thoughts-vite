import errorAnimation from "../assets/error_animation.json";
import smileAnimation from "../assets/smile_animation.json";
import Lottie from "lottie-react";
import styles from "./HandleError.module.css";
import PropTypes from "prop-types";

const HandleError = ({ error }) => {
  return (
    <div className={styles.lottieContainer}>
      {error ? (
        <div className={styles.error}>
          <Lottie
            className={styles.errorAni}
            animationData={errorAnimation}
            loop={true}
          />
          <p className={styles.errorMsg}>{error}</p>
        </div>
      ) : (
        <div className={styles.aniContainer}>
          <Lottie
            animationData={smileAnimation}
            loop={false}
            interactivity={{
              mode: "cursor",
              actions: [
                {
                  position: { x: [0, 1], y: [0, 1] },
                  type: "loop",
                  frames: [0, 128],
                },
                {
                  position: { x: -1, y: -1 },
                  type: "stop",
                  frames: [0],
                },
              ],
            }}
          />
        </div>
      )}
    </div>
  );
};

export default HandleError;

HandleError.propTypes = {
  error: PropTypes.string.isRequired,
};
