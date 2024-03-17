
import React, { useState, useEffect } from "react";

import { Header } from "./components/Header.jsx"
import { Form } from "./components/Form.jsx"
import { Feed } from "./components/Feed.jsx"



export const App = () => {

  //Initialising the states I need.
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null)
  const [thoughtsList, setThoughtsList] = useState([]);

  //declaring the API for the thoughts array
  const ThoughtsApi = "https://project-happy-thoughts-api-wrhl.onrender.com/thoughts";
 
  //The actual fetch thoughts array function! Now with ASYNC!! WOW
  const fetchThoughts = async () => {
    //using try..catch block to handle potential errors
    //using await to fetch the data!
    try {
      setLoading(true)
  
      const response = await fetch(ThoughtsApi)

      //if the status code is NOT ok, it throws an error.
      if(!response.ok) {
        throw new Error("Failed to fetch thoughts")
      }

      const thoughts = await response.json() //parse response as JSON
      setThoughtsList(thoughts) //Getting the array of thoughts inside ThoughtsList
      setLoading(false) //not loading
    } catch (error) { //if there is an error during fetch, it logs, and sets error state
      console.error ("Error fetching thoughts data", error)
      setError(error)
      setLoading(false)
    }
  };

  //useEffect is used to trigger fetchThougts when the component is mounted.
  useEffect(() => {
    fetchThoughts(); 
  }, []);

  //this takes an argument newThought to hold the value of the new message that would be posted in Form
  //adds it to the top of ThoughtsList array
  const addNewPost = (newThought) => {
    setThoughtsList([newThought, ...thoughtsList])
  }
  
  return (
    <div className="screen">
      <div className="app-wrapper">
        <Header />
        {/*to be able to add a new message, I'm sending addNewPost.
        I will aslo need to update the feed after sending message, so I need fetchThoughts*/}
        <Form 
          newMessage={addNewPost} 
          fetchThoughts={fetchThoughts}
        />
        {/*is it loading? display Loading..., otherwise the feed!
        for the feed part I need to ba able to update the array, so I need these proms*/}
        {loading ? ( 
          <p className="loading">LOADING FEED...</p>
        ):(
          <Feed 
            thoughtsList={thoughtsList}
            setThoughtsList={setThoughtsList}
          />
        )}
      </div>
    </div>
    );
};
