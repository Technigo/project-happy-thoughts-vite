import { useState, useEffect } from "react";
import "./fetch.css"
import { PostForm } from "./PostForm";
import { ThoughtList } from "./ThoughtList"


export const Fetch = ({ message, hearts, time}) => {
  const [getThought, setGetThought] = useState("");
  const [loadingThoughts, setLoadingThoughts] = useState(true);
  const [newThought, setNewThought] = useState("")

  const url = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

  // GET new thought
  const fetchMessages = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data) {
        setGetThought(data.thoughts);
      }
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoadingThoughts(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchMessages();
    }, 1000);
  }, []);
  

    const handleNewThoughtChange = (event) => {
      setNewThought(event.target.value)
    }


// //POST new thought

   const onFormSubmit = async (event) => {
   event.preventDefault()


 if (newThought.trim.length < 5) {
 alert("Thought must be at least 5 characters long")
 return 
 }


 const options = {
 method: "POST",
 headers: {
 "Content-type": "application/json",
 },
 body: JSON.stringify({
 message: newThought,
 }),
 }
 try {
 const response = await fetch(url, options)
 if (response.ok) {
        await fetchMessages()
      }
    } catch (error) {
     console.error(error)
    } finally {
     setNewThought("")
    }
 }

 useEffect(() => {
   fetchMessages()
 }, [])
    

return (
     <div className="thoughtContainer">
       <div id="message">{message}</div>
       <div className="loadingThoughts">
         {loadingThoughts ? "Loading thoughts..." : getThought}
       </div>
       <div id="hearts">{hearts}</div>
       <div id="time">{time}</div>
       <PostForm 
       newThought={newThought}
       handleNewThoughtChange={handleNewThoughtChange}
       onFormSubmit={onFormSubmit} />
     </div>
   );
   }
