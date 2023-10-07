// Importing the CSS module for styling
import styles from "./Container.module.css";

// Defining the React component 'Container' using a functional component
const Container = ({ children }) => {
    return (
        // Rendering a div element with CSS classes for styling
        <div className={styles.container}>
            {children} {/* Rendering the content passed between the tags */}
        </div>
    );
}

// Exporting the component as the default export of this module
export default Container;
