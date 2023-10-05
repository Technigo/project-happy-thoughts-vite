import { useState, useEffect } from "react"

export const SendThought = ({ fetchPosts }) => {
    const [newPost, setNewPost] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    useEffect(() => {
        if (newPost.length >= 141) {
        setErrorMessage("Your message is too long, try to write it shorter")
        } else {
            setErrorMessage("")
        }
    }, [newPost])

    const postNewThought = async () => {
        try {
            if (newPost.length === 0) {
      console.error("Message cannot be empty");
      return;
    }
            const response = await fetch(
                `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts`, 
                {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: newPost }),
            }
            )

            if (response.ok) {
                setNewPost("")
                fetchPosts()
            } else {
                console.error('Failed to post the message')
            }
        } catch (error) {
            console.error('Error while posting the message', error)
        }
    }
    
    return (
    <div>
      <h2>What is making you happy right now?</h2>  
      <textarea
        rows="3"
        placeholder="'If music be the food of love, play on.' - William Shakespeare"
        value={newPost}
        onChange={(e) => setNewPost(e.target.value)}
      ></textarea>
      <button onClick={postNewThought}>❤️ Send Happy Thought ❤️</button>
      <p className="error-message">{errorMessage}</p>
    </div>
  )
}