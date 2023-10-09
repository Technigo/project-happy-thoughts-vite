// Importing the CSS module for styling
import styles from "./Header.module.css";

// Defining the React component 'Header' using a functional component
const Header = () => {
    return (
        // Rendering a div element with CSS class for styling
        <div className={styles.wrapper}>
            {/* Rendering an h1 element */}
            <h1>Project Happy Thoughts</h1>
            {/* Rendering an h2 element */}
            <h2>By Amanda</h2>
        </div>
    )
}

// Exporting the component as the default export of this module
export default Header;
