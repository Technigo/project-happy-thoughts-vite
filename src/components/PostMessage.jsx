import { useState, useEffect } from "react";

export const PostMessage = ({ newMessage, fetchPosts }) => {
  const [newPost, setNewPost] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (newPost.length >= 141) {
      setErrorMessage("Oh no, your message is too long!");
    } else {
      setErrorMessage("");
    }
  }, [newPost]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log("newPost onformsubmit:", newPost);

    if (newPost.length <= 4) {
      setErrorMessage(
        "Write some more, your message is too short. Atleast 5 letters!"
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
        .then((data) => {
          newMessage(data);
          setNewPost("");
          fetchPosts();
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div>
      <h2>Post your message</h2>
      {/*form element to use handleFormSubmit with onSubmit event handler*/}
      <form onSubmit={handleFormSubmit}>
        <textarea
          rows="5"
          cols="50"
          placeholder="Collect your happy thoughts here"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
        <div>
          {/*displays error message*/}
          <p className="error">{errorMessage}</p>
          <p className={`length ${newPost.length >= 140 ? "red" : ""}`}>
            {newPost.length}/140
          </p>
        </div>
        <button type="submit" id="submitPostBtn">
          Send
        </button>
      </form>
    </div>
  );
};
