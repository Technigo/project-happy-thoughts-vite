import { useState } from "react";
import styles from "./Form.module.css";

export const Form = ({ onPosts }) => {
  const [tweet, setTweet] = useState("");

  const handleFormSubmit = async () => {
    console.log(tweet);
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
    } catch (error) {
      console.error(error);
    }
  };

  const handleInput = (e) => {
    setTweet(e.target.value);
    console.log(tweet);
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
          <div className={styles.textNum_box}>
            <span>{tweet.length}</span>/140
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
