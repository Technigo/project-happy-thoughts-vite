import { useState } from "react";
import { useEffect } from "react";

export const App = () => {

  useEffect(() => {
    console.log("mount")
  });

  const handleSubmit = (e) => { 
    e.preventDefault()
}

  const [thought, setThought] = useState("");


  const handleFormSubmit = (e) => { 
    setThought(thought)
    {"thought", e.target.value;}
  }

  const submitForm = () => {
    console.log("Submited form: ", thought)
  };
  
  return (
    <div>
      <header>
        <h1>Happy Thoughts Create Power!</h1>
      </header>
      
      <div className="new-thought-container">
        <h2>What makes you happy right now?</h2>
        <form
          className="thought-form"
          onSubmit={handleSubmit}>
          
          <label htmlFor="thought">
            <input
              type="text"
              id="thought"
              placeholder="Example: The sunshine makes me happy!"
              value={thought}
              onChange={handleFormSubmit} />
          </label>
        </form>

        <button className="submit-btn" onClick={submitForm}>❤️ Send Happy Thought ❤️</button>
      </div>

      <div className="thought-container">
        <p>It's my birthday!!!</p>
        <div className="like-container">
          <button className="like-btn">❤️</button>
          <p className="like-number">x 10</p>
          <p className="time">30 secons ago</p>
        </div>
      </div>
      
    </div>
  );
};
