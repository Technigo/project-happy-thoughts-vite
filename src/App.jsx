import { useState, useEffect } from "react";
import { RepliesList } from "./components/RepliesList";

export const App = () => {
  const [replies, setReplies] = useState([])
  const fetchReplies = async () => {
    try {
      const response = await fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
      const responseData = await response.json()
      console.log(responseData)
      setReplies(responseData)
    } catch (error) {
      console.error("failed to fetch recent thoughts", error)
    }
  }
  useEffect(() => {
    fetchReplies()
  }, [])
  return <div className="App"><RepliesList repliesProp={replies}/></div>;
};
