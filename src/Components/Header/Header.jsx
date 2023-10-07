import styles from './Header.module.css';
//reminder: use styles. in class

export const Header = () => {
    return (
        <header className={styles.hero}>
            <h1 className={styles.h1}>Share Happy Thoughts</h1>

            <h2 className={styles.h2}>✨ Cherish the little things ✨</h2>

        </header>
    );
};
