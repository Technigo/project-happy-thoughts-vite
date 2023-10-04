//Not strictly necessary, but for practice. 

import styles from './Header.module.css';
//reminder, use styles. in class

export const Header = () => {

    return (
        <header className={styles.hero}>
            <h1 className={styles.h1}>Project Happy thoughts</h1>
            <h2 className={styles.h2}>Elbine</h2>
        </header>
    );

};