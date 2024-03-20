import { HappyCard } from "./components/HappyCard";
import { useEffect, useState } from "react"


export const App  = () =>{  
  const [thoughts, setThoughts] = useState ([])

  useEffect (() => {
    fetchThoughts()
  }, [])

  const fetchThoughts = async () => {
    try{
      const response = await fetch ("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
      const data = await response.json()
      setThoughts(data)
    } catch (error) {
      console.error("Error fetching thoughts:", error)
    }
  }

  return (
    <div className="App">
      {thoughts.map(thoughts => (
      <HappyCard 
        key={thoughts.id}
        message={thoughts.message}
        hearts={thoughts.hearts}
        createdAt={thoughts.createdAt}
      />))}      
    </div>
  )
};
