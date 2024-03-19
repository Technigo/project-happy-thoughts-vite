// Importing the CSS module for styling
import styles from "./Loading.module.css";

// Defining the React component 'Loading' using a functional component
const Loading = () => {
    return (
        // Rendering a div element with CSS class for styling
        <div className={styles.loading} />
    );
}

// Exporting the component as the default export of this module
export default Loading;
