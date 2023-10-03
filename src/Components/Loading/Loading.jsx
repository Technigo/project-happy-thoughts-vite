import styles from "./Loading.module.css";
export const Loading = () => {
  return (
    <div className={styles.loading_box}>
      <div className={styles.inner_box}>
        <p>Loading</p>
      </div>
    </div>
  );
};
