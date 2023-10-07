// Importing the CSS module for styling
import styles from "./Card.module.css";

// Defining the React component 'Card' using a functional component
const Card = ({ children, className }) => {
    return (
        // Rendering a div element with CSS classes for styling
        <div className={`${styles.card} ${className}`}>
            {children} {/* Rendering the content passed between the tags */}
        </div>
    );
}

// Exporting the component as the default export of this module
export default Card;
