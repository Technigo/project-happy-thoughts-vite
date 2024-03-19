import { useState } from "react"

export const ThoughtForm = ({ onAddThought }) => {
    const [newThought, setNewThought] = useState('');
    //declare a state 'newThought'  with an empty string
 
    const handleInputChange = (event) => {
        setNewThought(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        //preventing the default form submission behaviour
        try {
            const response = await fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts", {
                /* sends a POST request to the API with the new thought message */
                method: 'POST',
                /* Setting the content type of the request to application/json */
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: newThought }),
            });
          
            if (response.ok) {
                /* calls the 'onAddThought' function passed as prop to update the list of thoughts */
                onAddThought();
                /* after it clears the input field */
                setNewThought('');
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
        <h2>What´s making you happy right now?</h2>
        <form onSubmit={handleSubmit}>
            <textarea
                rows="5"
                cols="50"
                value={newThought}
                placeholder="Enter your new thought"
                onChange={handleInputChange}
            />
            <button type="submit">
                ❤️ Send Happy Thought ❤️
            </button>
        </form>
    </div>
  );
};

//this component will handle the input fields and the submission of new thoughts
//The 'handleInput change' function updates the 'newThought' state as teh user types in the input field
// send a POST request to the API to add new thought
// The 'handleSubmit' function is triggered hwen the form is submitted
