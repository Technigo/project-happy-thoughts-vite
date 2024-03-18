import { useState } from "react";
export const InputSection = () => {
  const url = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

  const [newPost, setNewPost] = useState("");

  const handleNewPost = (event) => {
    setNewPost(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: newPost }),
      });

      if (!response.ok) {
        console.log("Post failed");
      } else {
        console.log("Posted!");
        setNewPost("");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <form
      className="input-section"
      name="thought-input"
      id="thought-input"
      onSubmit={handleSubmit}
    >
      <label htmlFor="happy-input">
        What&#39;s making you happy right now?
      </label>
      <input
        type="text"
        value={newPost}
        id="happy-thought"
        name="happy-thought"
        onChange={handleNewPost}
      />
      <button type="submit">❤️Send Happy Thought❤️</button>
    </form>
  );
};
