import { useState, useEffect } from 'react'

import { Header } from "./components/Header"
import { SendHappyCard } from "./components/SendHappyCard"
import { HappyCard } from "./components/HappyCard"
import { LoveSentCounter } from './components/LoveSentCounter'

export const App = () => {
  const [ happyThoughts, setHappyThoughts ] = useState()
  const [ loveSent, setLoveSent ] = useState(0)

  useEffect(()=>{
    fetchHappyThoughts()
  },[])

  const fetchHappyThoughts = () => {
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
    .then(response => response.json())
    .then(data => {
      setHappyThoughts(data)
    })
    .catch(error => console.log("Error fetching the data, ", error))
  }

  const addNewHappyThought = (newHappyThought) => {
    let newHappyArray = [...happyThoughts]
    newHappyArray.unshift(newHappyThought)
    setHappyThoughts(newHappyArray)
  }

  return (
    <div className="the-app">
      <Header />
      <SendHappyCard 
        setNewMessage={addNewHappyThought} />

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
            createdAt={item.createdAt} />
        )}
      </div>
    </div>
    );
};
