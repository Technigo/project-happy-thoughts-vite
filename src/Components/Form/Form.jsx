import { useEffect, useRef, useState, useCallback } from "react";
import styles from "./Form.module.css";

export const Form = ({ onPosts }) => {
  const [tweet, setTweet] = useState("");
  const [error, setError] = useState({
    isError: false,
    message: "",
  });
  //getting a jsx element (textarea)
  const textRef = useRef("");

  const handleInput = (e) => {
    setTweet(e.target.value);
    // Handle error if a message is londer than 140 words, error message will be shown

    if (tweet.length >= 140) {
      setError({
        isError: true,
        message: "Your message is too long",
      });
    } else {
      setError({
        isError: false,
        message: "",
      });
    }
  };

  const handleFormSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      // error handling for a short message
      if (tweet.length < 5) {
        return setError({
          isError: true,
          message: "Your message is too short.",
        });
      }
      // fetching data
      try {
        const res = await fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: tweet }),
        });

        const data = await res.json();
        onPosts((prev) => [data, ...prev]);
        setTweet("");
        return;
      } catch (error) {
        setError({
          isError: true,
          message: "Something went wrong 🔥  Couldn't post your message...",
        });
      }
    },
    [onPosts, tweet]
  );

  useEffect(() => {
    function callBack(event) {
      if (event.key === "Enter") {
        handleFormSubmit(event);
      } else if (event.key === "Escape") {
        // to make textarea focused when escape key is pressed
        textRef.current.focus();
      }
    }
    window.addEventListener("keydown", callBack);
    return () => {
      window.removeEventListener("keydown", callBack);
    };
  }, [handleFormSubmit]);

  return (
    <>
      <div className={styles.form_wrapper}>
        <h2>What is making you happy right now?</h2>
        <form onSubmit={handleFormSubmit}>
          <textarea
            value={tweet}
            onChange={handleInput}
            name="post-form"
            id="post-form"
            rows="3"
            ref={textRef}
            placeholder="'If music be the food of love, play on.'  - William Shakespeare"
          ></textarea>
          <div className={`${styles.textNum_box} ${error.isError ? styles.flex : ""}`}>
            {error.isError && <p className={styles.error_message}>{error.message}</p>}
            <span className={styles.countNum}>{tweet.length}/140</span>
          </div>

          <button className={styles.submit_btn}>
            <span className={styles.emoji}>❤️</span>
            Send Happy Thought
            <span className={styles.emoji}>❤️</span>
          </button>
        </form>
      </div>
    </>
  );
};
