// App-component to display posts from the Happy thoughts API.

import { useState, useEffect } from 'react'

import { Header } from "./components/Header"
import { SendHappyCard } from "./components/SendHappyCard"
import { HappyCard } from "./components/HappyCard"
import { LoveSentCounter } from './components/LoveSentCounter'

export const App = () => {
  //States to store an array of happy thoughts, fetched from API. State to keep track of total amount of loves sent.
  const [ happyThoughts, setHappyThoughts ] = useState()
  const [ loveSent, setLoveSent ] = useState(0)

  //useEffect to fetch happy thoughts on first mount
  useEffect(()=>{
    fetchHappyThoughts()
  },[])

  //Function to refetch thoughts from API. Errors are caught and displayed on console.
  const fetchHappyThoughts = () => {
    fetch("https://love-twitter-api.onrender.com/thoughts")
    .then(response => response.json())
    .then(data => {
      setHappyThoughts(data)
      console.log(data)
    })
    .catch(error => console.log("Error fetching the data, ", error))
  }

  //Function to add a happy thought to the array of happy thoughts. This is redundant right now as messages are refetched from the API when message is submitted and when likes are sent. Not sure if this approach or the refetching of thoughts are best...
  const addNewHappyThought = (newHappyThought) => {
    let newHappyArray = [...happyThoughts]
    newHappyArray.unshift(newHappyThought)
    setHappyThoughts(newHappyArray)
  }

  return (
    <div className="the-app">
      <Header />
      <SendHappyCard 
        setNewMessage={addNewHappyThought}
        fetchAllMessages={fetchHappyThoughts} />

      <LoveSentCounter loveCounter={loveSent} />

      <div className="happy-card-container">
        {happyThoughts && happyThoughts.map(
          (item) => 
          <HappyCard 
            className="happy-thought-cards"
            key={item._id}
            id={item._id}
            message={item.message} 
            hearts={item.hearts}
            setLoveSent={setLoveSent}
            createdAt={item.createdAt}
            fetchAllMessages={fetchHappyThoughts} />
        )}
      </div>
    </div>
    );
};
