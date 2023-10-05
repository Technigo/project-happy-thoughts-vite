import styles from "./Loading.module.css";
export const Loading = () => {
  return (
    <div className={styles.loading_box}>
      <div className={styles.inner_box}>
        <p>Loading</p>
      </div>
      <div className={`${styles.hearts} ${styles.one}`}> ❤️</div>
      <div className={`${styles.hearts} ${styles.two}`}> ❤️</div>
      <div className={`${styles.hearts} ${styles.three}`}> ❤️</div>
      <div className={`${styles.hearts} ${styles.four}`}> ❤️</div>
      <div className={`${styles.hearts} ${styles.five}`}> ❤️</div>
      <div className={`${styles.hearts} ${styles.six}`}> ❤️</div>
    </div>
  );
};
