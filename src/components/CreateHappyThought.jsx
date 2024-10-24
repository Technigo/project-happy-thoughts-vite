import { useState } from "react";
import { Button } from "./ui/Button";
import usePost from "../hooks/usePost";
import errorIcon from "../assets/icons/error.svg";
import { IconLoading } from "../assets/icons/IconLoading";
import "./CreateHappyThought.css";

export const CreateHappyThought = ({
  thought,
  setThought,
  setHappyThoughts,
}) => {
  const { postData, isPosting } = usePost();
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState(false);
  const minLength = 4;
  const maxLength = 140;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (thought.length >= minLength) {
      try {
        // Send the post request
        const result = await postData(
          "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts",
          { message: thought }
        );

        // Clear the input field
        setThought("");

        // Update the happy thoughts with the new full thought object returned by the API
        setHappyThoughts((previousThoughts) => [result, ...previousThoughts]);

        setError(false);
      } catch (err) {
        console.error("Error:", err);
      }
    } else {
      setError(true);
    }
  };

  return (
    <div className="create-thought__container">
      <h1 className="create-thought__title">Share a happy thought</h1>
      <form className="create-thought__form" onSubmit={handleSubmit}>
        <label htmlFor="create-thought">
          What is making you happy right now?
        </label>
        <textarea
          id="create-thought"
          name="create-thought"
          aria-describedby="character-count"
          minLength={minLength}
          maxLength={maxLength}
          rows="5"
          cols="33"
          required
          value={thought}
          onChange={(e) => {
            setThought(e.target.value);
            // Clear error if input becomes valid while typing
            if (error && e.target.value.length >= minLength) {
              setError(false);
            }
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            setIsFocused(false);
            if (thought.length < minLength) {
              setError(true);
            } else {
              setError(false);
            }
          }}
        />

        <output
          className="create-thought__character-count"
          id="character-count"
          aria-live="polite"
        >
          {thought.length} of {maxLength}
        </output>

        {!isFocused && error && (
          <div className="info info--error" role="alert" aria-live="assertive">
            <img src={errorIcon} alt="" />
            <p>{`Type at least ${minLength} characters.`}</p>
            {/* Writing it like this for screen readers to be able to read it as a sentence, instead of chopped up in three bits. */}
          </div>
        )}

        <Button
          className="create-thought__button"
          type="submit"
          disabled={isPosting}
        >
          {isPosting ? (
            <>
              <IconLoading color="white" />
            </>
          ) : (
            "Post happy thought"
          )}
        </Button>
      </form>
    </div>
  );
};
