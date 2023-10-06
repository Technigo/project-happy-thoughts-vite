import { useEffect } from "react";

export const Validation = ({ errorMessage, setErrorMessage, thought }) => {
    const lengthOfThought = thought.length;

    // UseEffect to check the length of the message/thought
    useEffect(() => {
        // Checking to see if the happy-thought is longer than or equal to 141 characters
        if (lengthOfThought >= 141) {
            // Sets an error message if the `thought` is too long
            setErrorMessage("Your message is too long 😔");
            // Checking to see if the happy-thought is longer than or equal to 1 character and less than or equal to 4 characters
        } else if (lengthOfThought >= 1 && lengthOfThought <= 4) {
            // Sets an error message if the `thought` is too short
            setErrorMessage("Your message is too short 🧐");
        }
        else {
            // Clears the error message if the `thought` is the correct length
            setErrorMessage("");
        }
    }, [thought]); // Dependency array includes `thought`, so the effect runs when `thought` changes

    return (
        <section className="validation-section">
            <p className="validation-msg">{errorMessage}</p>
            <p className="num-of-characters">{lengthOfThought}/140</p>
        </section>
    )
}
