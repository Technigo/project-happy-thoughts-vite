import { useState } from "react";
import { ThoughtsForm } from "./form/ThoughtForm";
import { ThoughtList } from "./list/ThoughtList";
import { useFetchThoughts } from "../hooks";
import { postThought, likeThought } from "../api";

export const HappyThoughts = () => {
  const [newThought, setNewThought] = useState("")
  const { thoughts, setThoughts, loading, getThoughts } = useFetchThoughts()

  // this function handles the submission of the thoughts form. 
  // It prevents the default form submission behavior, checks if the input is not empty and then calls the postThought functions to send the new thought to the API. If the post is successful, it clears the input and refreshes the list of the thoughts (getThoughts)
  const handleFormSubmit = async (e) => {
    e.preventDefault()
    if (!newThought.trim()) return
    const success = await postThought(newThought)
    if (success) {
      setNewThought("")
      getThoughts()
    }
  }

  // this function handles the likes of the thought by its ID. It calls the function likeThought, and if successful, updates the local state with the new number of hearts by mapping over the previous thoughts
  const handleLike = async (thoughtId, isClicked) => {
    try {
      await likeThought(thoughtId)
      setThoughts((prevThoughts) =>
        prevThoughts.map((thought) =>
          thought._id === thoughtId ? { ...thought, hearts: thought.hearts + (isClicked ? 1 : -1) } : thought
        ))
    } catch (error) {
      console.error("Error liking thought", error)
    }
  }

  return (
    <div className="content">
      <ThoughtsForm
        newThought={newThought}
        setNewThought={setNewThought}
        handleFormSubmit={handleFormSubmit}
      />
      {loading ? <p>Loading...</p> : <ThoughtList thoughts={thoughts} onLike={handleLike} />}
    </div>
  )
}