import { useState } from "react";

export const NewThought = () => {
  const [thought, setThought] = useState("");
  const [error, setError] = useState("");
  const [response, setResponse] = useState("");

  const disableSubmit = thought.length < 5 || 140 - thought.length < 5

  const URL = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";
    
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: thought,
        })
      });

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`)
      }

      const data = await res.json();
      setResponse(data);
      setThought("");
      // setThought((previousThoughts) => [data, ...previousThoughts])

    } catch (error) {
      console.log("Error is ", error);
      setError("error!");
      throw new Error("Error: ", error);
    }
  };

  const handleInputChange = (e) => { 
    setThought(e.target.value);
   }
  
    return (
    <div className="new-thought-container">
      <h3>What makes you happy right now?</h3>
        {error && <p style={{ color: "red" }}>{ error }</p> }
      <form
        className="thought-form"
        onSubmit={handleSubmit}>
        <label>
          <textarea
            className="text-area"
            rows={5}
            cols={30}
            minLength={5}
            maxLength={140}
            value={thought}
            onChange={handleInputChange}
            placeholder="Type here! Example: The sunshine makes me happy!"
            required            
          />
        </label>
          <p className={disableSubmit ? "text-length red-text" : "text-length"}>Characters left: {140 - thought.length }</p>  
        <button type="submit" className={disableSubmit ? "submit-btn" : "submit-btn submit-btn-pink"} aria-label="click to submit your answer">❤️ Send Happy Thought ❤️</button>
      </form>

      {response && thought}
    </div>      
  );
};