// Importing the CSS module for styling
import styles from "./Button.module.css";

// Defining the React component 'Button' using a functional component
const Button = ({
    disabled, // A prop that determines whether the button is disabled or not
    children,   // The content between the opening and closing tags of the Button component
    onClick,   // Function to be executed when the button is clicked
    className, // Additional class names for custom styling
}) => {
    return (
        // Rendering a button element
        <button
            onClick={onClick} // Attaching the click event handler passed as a prop
            disabled={disabled} // Setting the 'disabled' attribute based on the 'disabled' prop
            className={`${styles.button} ${className}`} // Applying CSS classes for styling
        >
            {children} {/* Rendering the content passed between the tags */}
        </button>
    );
}

// Exporting the component as the default export of this module
export default Button;
