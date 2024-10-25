import { useState } from "react";
import usePost from "../hooks/usePost";
import { Button } from "./ui/Button";
import { IconLoading } from "../assets/icons/IconLoading";
import errorIcon from "../assets/icons/error.svg";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./CreateHappyThought.css";

export const CreateHappyThought = ({
  thought,
  setThought,
  setHappyThoughts,
  isLoading,
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
    <SkeletonTheme baseColor="#bbb" highlightColor="#ccc">
      <div className="create-thought__container">
        <h1 className="create-thought__title">
          {isLoading ? <Skeleton /> : "Share a happy thought"}
        </h1>
        <form className="create-thought__form" onSubmit={handleSubmit}>
          <label htmlFor="create-thought">
            {isLoading ? (
              <Skeleton height={18} />
            ) : (
              "What is making you happy right now?"
            )}
          </label>
          {isLoading ? (
            <Skeleton height={135} />
          ) : (
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
          )}

          {isLoading ? (
            <Skeleton width={50} containerClassName="skeleton-align-right" />
          ) : (
            <output
              className="create-thought__character-count"
              id="character-count"
              aria-live="polite"
            >
              {thought.length} of {maxLength}
            </output>
          )}

          {!isFocused && error && (
            <div
              className="info info--error"
              role="alert"
              aria-live="assertive"
            >
              <img src={errorIcon} alt="" />
              <p>{`Type at least ${minLength} characters.`}</p>
              {/* Writing it like this for screen readers to be able to read it as a sentence, instead of chopped up in three bits. */}
            </div>
          )}

          {isLoading ? (
            <Skeleton height={57} />
          ) : (
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
          )}
        </form>
      </div>
    </SkeletonTheme>
  );
};
