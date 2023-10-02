import { useEffect, useState } from "react";
import styles from "./Form.module.css";

export const Form = () => {
  return (
    <div className={styles.form_wrapper}>
      <h2>What is making you happy right now?</h2>
      <form action="post">
        <textarea
          name="post-form"
          id="post-form"
          rows="3"
          placeholder="'If music be the food of love, play on.'  - William Shakespeare"
        ></textarea>
        <div className={styles.textNum_box}>
          <span>0</span>/140
        </div>

        <button className={styles.submit_btn}>
          <span className={styles.emoji}>❤️</span>
          <p>Send Happy Though</p>
          <span className={styles.emoji}>❤️</span>
        </button>
      </form>
    </div>
  );
};
