// Importing the CSS module for styling
import Card from "../components/card/Card";
import styles from "./Error.module.css";

// Defining the React component 'Error' using a functional component
const Error = () => {
    return (
        // Rendering a paragraph element with CSS class for styling
        <Card className={styles.error}>
            <p>Could not fetch posts... 😔</p>
        </Card>
    );
}

// Exporting the component as the default export of this module
export default Error;
