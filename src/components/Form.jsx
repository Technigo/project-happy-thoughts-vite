export const Form = ({newThought, setNewThought}) => {

  const postThought = async event => {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: newThought }),
        }
      );
      if (!response.ok) {
        throw new Error("Error fetching data");
      }
      setNewThought("");
    } catch (error) {
      throw new Error("Error", error);
    }
  };

  const handleChange = event => {
    setNewThought(event.target.value);
  };

  return (
    <form
      className="thought-form"
      onSubmit={postThought}>
      <label>
        What&apos;s making you happy right now?
        <textarea
          name="thought"
          id="thought-input"
          cols="30"
          rows="10"
          value={newThought}
          onChange={handleChange}></textarea>
      </label>
      <button className="submit-btn">❤️ Send Happy Thought ❤️</button>
    </form>
  );
};
