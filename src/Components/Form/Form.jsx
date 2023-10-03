import { useState } from "react";
import styles from "./Form.module.css";

export const Form = ({ onPosts }) => {
  const [tweet, setTweet] = useState("");
  const [error, setError] = useState({
    isError: false,
    message: "",
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (tweet.length < 5) {
      return setError({
        isError: true,
        message: "Your message is too short",
      });
    } else {
      setError({
        isError: false,
        message: "",
      });
    }

    try {
      const res = await fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: tweet }),
      });
      // Error handling
      if (res.status === 404) {
        throw new Error("Page not found");
      } else if (res.status === 500) {
        throw new Error("Server error");
      } else if (!res.ok) {
        console.log(res);
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      onPosts((prev) => [data, ...prev]);
      setTweet("");
      return;
    } catch (error) {
      console.error("error", error);
      setError({
        isError: true,
        message: "Something went wrong 🔥  Couldn't post your message...",
      });
    }
  };

  const handleInput = (e) => {
    setTweet(e.target.value);

    // Handle error if a message is londer than 140 words, error message will be shown

    setError({
      isError: false,
      message: "",
    });
    if (tweet.length >= 140) {
      setError({
        isError: true,
        message: "Your message is too long",
      });
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleFormSubmit(event);
    }
  };

  return (
    <>
      <div className={styles.form_wrapper}>
        <h2>What is making you happy right now?</h2>
        <form onSubmit={handleFormSubmit}>
          <textarea
            value={tweet}
            onChange={handleInput}
            onKeyDown={handleKeyDown}
            name="post-form"
            id="post-form"
            rows="3"
            placeholder="'If music be the food of love, play on.'  - William Shakespeare"
          ></textarea>
          <div className={`${styles.textNum_box} ${error.isError ? styles.flex : ""}`}>
            {error.isError && <p className={styles.error_message}>{error.message}</p>}
            <span className={styles.countNum}>{tweet.length}/140</span>
          </div>

          <button className={styles.submit_btn}>
            <span className={styles.emoji}>❤️</span>
            Send Happy Though
            <span className={styles.emoji}>❤️</span>
          </button>
        </form>
      </div>
    </>
  );
};
