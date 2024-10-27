import { useState } from "react";
import { URL } from "./ApiUrl";

export const PostThoughts = () => {
  const [body, setBody] = useState('')
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('');
  //const [post, setPost] = useState([]); //need to write something in here in the useState parenteses... and further down in the code in the return
 
  //This functions POSTs a happy thought to the API
  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true) /* Start loading on submit */
    setErrorMessage('');

    // Validation: Check if message is between 5 and 140 characters
    if (body.length < 5 || body.length > 140) {
      setErrorMessage("Message must be between 5 and 140 characters.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          //this is a way to send extra information to our API.
          "content-type": "application/json; charset=utf-8"
        }, 
        body: JSON.stringify({
          message: body //command to tell API the message (and what i call it in my code "body" should be fetched)
        })
      });

    if (response.ok) {
      //const recentPost = await response.json(); //Get the new post
      //setPost((previousPost) => [recentPost, ...previousPost]); // Update the post state
      setBody(''); //this clears the input field after its been posted
      
    } else {
      const errorData = await response.json();
      setErrorMessage(errorData.message || "An error occurred. Please try again.");
      }
    }  catch (error) {
      setErrorMessage("Network error. Please try again later.");
      console.log("error:", error);
    } finally {
      setLoading(false) /* Stops the loading */
    }
  }



  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label>
          <h3>What's making you happy right now?</h3>
          <textarea 
            value={body}
            className=""
            placeholder="Share your happy thought here"
            onChange={(e) => setBody(e.target.value)} 
          />
        </label>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button 
        className="submit-button"
        type="submit"
        disabled={loading}
        >
        {loading ? "Loading..." : "💖Send Happy Thought💖"}{/* Loading? If True show Loading... If False show 💖Send Happy Thought💖*/}
        </button>
      </form>
    </section>
  )
}