import { useState, useEffect } from "react";

export const PostThought = () => {
  const [newPost, setNewPost] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  //------- useEffect hook to handle when user types more than 140 characters -----//

  useEffect(() => {
    if (newPost.length >= 141) {
      setErrorMessage("Your message is too long!");
    } else {
      setErrorMessage("");
    }
  }, [newPost]);

  //---------- Function to process submit form ------------//

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log("newPost onformsubmit:", newPost);

    if (newPost.length <= 4) {
      setErrorMessage(
        "Your message is too short, it needs to be at least 5 characters"
      );
    } else {
      const options = {
        method: "POST",
        body: JSON.stringify({
          message: `${newPost}`,
        }),
        headers: { "Content-Type": "application/json" },
      };

      await fetch(
        "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts",
        options
      )
        .then((response) => response.json())
        .then((newThoughts) => {
          setRecentThoughts((previousThoughts) => [
            newThoughts,
            ...previousThoughts,
          ]);
          newMessage(data);
          setNewPost("");
          fetchPosts();
        })
        .catch((error) => console.log(error));
    }

    //function to refresh page after submit form so that the users new lessage is added to the list
    function refreshPage() {
      window.location.reload(false);
    }

    refreshPage();
  };

  return (
    <div>
      <p className="happy-right-now-text">
        What is making you happy right now?
      </p>
      <form onSubmit={handleFormSubmit}>
        <textarea
          className="message-input-box"
          rows="5"
          cols="50"
          placeholder="'Rest, nature, books, music...such is my idea of happiness.' - Leo Tolstoy"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
        <div>
          <p className="error">{errorMessage}</p>
          <p
            className={`length ${
              newPost.length >= 140 ? "turn-text-red" : "text-stays-normal"
            }`}
          >
            {newPost.length}/140
          </p>
        </div>
        <div className="post-button-container">
          <button type="submit" id="post-message-btn">
            &#128154; Post Message &#128154;
          </button>
        </div>
      </form>
    </div>
  );
};
