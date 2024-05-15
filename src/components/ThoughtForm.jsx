import { useState } from "react";

export const ThoughtForm = ({ onAddThought }) => {
  const [newThought, setNewThought] = useState("");
  //declare a state 'newThought' with an empty string

  const handleInputChange = (event) => {
    setNewThought(event.target.value);
  };
  // 'handleInputChange' function updates 'newThought' state as the user types

  const handleSubmit = async (event) => {
    event.preventDefault();
    //preventing the default form submission behaviour
    try {
      if (newThought.trim() === "") {
        //Check if the new thought is empty oronly contains white space
        alert("Please type something before posting");
        return; // Exist the function early if the thought is empty
      }
      const response = await fetch(
        "https://project-happy-thoughts-api-bsct.onrender.com/thoughts",
        {
          /* sends a POST request to the API with the new thought message */
          method: "POST",
          /* Setting the content type of the request to application/json */
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: newThought }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        /* calls the 'onAddThought' function passed as prop to update the list of thoughts */
        onAddThought(data);
        /* after, it clears the input field */
        setNewThought("");
      } else {
        console.error("Failed to add new thought");
      }
    } catch (error) {
      /* Logging any errors that occur during the fetch operation */
      console.error("Error adding new thought", error);
    }
  };

  return (
    <div>
      <div className="post-box">
        <h2>What´s making you happy right now?</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="newThought"></label>
          <textarea
            id="newThought"
            rows="5"
            cols="50"
            value={newThought}
            placeholder='"Success is not final, failure is not fatal: It is the courage to continue that counts." - Winston Churchill'
            onChange={handleInputChange}
          />
          <button type="submit" aria-label="Send Happy Thought">
            ❤️ Send Happy Thought ❤️
          </button>
        </form>
      </div>
    </div>
  );
};

//this component will handle the input fields and the submission of new thoughts
//The 'handleInput change' function updates the 'newThought' state as the user types in the input field
// send a POST request to the API to add new thought
// The 'handleSubmit' function is triggered hwen the form is submitted
//The htmlFor attribute of the <label> element is set to the same value as the id attribute of the <textarea> element to associate the label with the textarea for accessibility.
