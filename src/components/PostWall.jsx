import { useEffect, useState } from "react"
import { PostCard } from "./PostCard";
import { formatDistanceToNow } from 'date-fns';
import { GiveLoveButtons } from "./GiveLoveButtons";

export const PostWall  = () => {  
  const [thoughts, setThoughts] = useState ([])
  const [likesPerClick, setLikesPerClick] = useState(1)
  const url = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts"

  useEffect (() => {
    fetchThoughts()
  }, []) //Only run once when the component mounts

  const fetchThoughts = async () => {
    try{
      const res = await fetch (url)
      const data = await res.json()
      setThoughts(data)
      console.log(thoughts)
    } catch (error) {
      console.error("Error fetching thoughts:", error)
    }
  }

  //This function will modify the timestamp using date-fns library imported at the top
  const calculateTimeDifference = (timestamp) => {
    return formatDistanceToNow(new Date(timestamp), { addSuffix: true });
  }

  return (
    <div className="App">
      <GiveLoveButtons 
        setLikesPerClick={setLikesPerClick}
      />
    {thoughts.map((thoughts) => (
      <PostCard 
        key={thoughts._id} //I got stuck 3 days in here
        _id={thoughts._id} //and this line was the solution:)
        message={thoughts.message}
        hearts={thoughts.hearts}
        timeSinceCreated={calculateTimeDifference(thoughts.createdAt)}
        setLikesPerClick={setLikesPerClick}
        likesPerClick={likesPerClick}
        apiUrl={url}
      />
      ))}      
    </div>
  )
};
