import { useEffect, useState } from "react";

export const Validation = ({ errorMessage, setErrorMessage, thought }) => {
    const lengthOfThought = thought.length;
    const [toLongText, setToLongText] = useState(false);

    // UseEffect to check the length of the message/thought
    useEffect(() => {
        // Checking to see if the happy-thought is longer than or equal to 141 characters
        if (lengthOfThought >= 141) {
            // Sets an error message if the `thought` is too long
            setErrorMessage("Your message is too long 😔");
            // Sets the color of the number of characters to red
            setToLongText(true);
            // Checking to see if the happy-thought is longer than or equal to 1 character and less than or equal to 4 characters
        } else if (lengthOfThought >= 1 && lengthOfThought <= 4) {
            // Sets an error message if the `thought` is too short
            setErrorMessage("Your message is too short 🧐");
            setToLongText(true);
        }
        else {
            // Clears the error message if the `thought` is the correct length
            setErrorMessage("");
            // Doesn't add a color-specific class, so that the look is the same as default
            setToLongText(false);
        }
    }, [thought]); // Dependency array includes `thought`, so the effect runs when `thought` changes

    return (
        <section className="validation-section">
            <p className="validation-msg">{errorMessage}</p>
            <p className={`num-of-characters ${toLongText ? "validation-msg" : ""}`}>{lengthOfThought}/140</p>
        </section>
    )
}
