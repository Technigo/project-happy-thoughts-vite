import { useEffect, useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Message } from "./components/Message";
import { NewPost } from "./components/NewPost";
import "./index.css";




export const App = () => {
  const [loading, setLoading] = useState(false);
  const [thoughts, setThoughts] = useState([]);


  // GET message
  const fetchPosts = () => {
    setLoading(true);
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
      .then((response) => response.json())
      .then((data) => {  //data
        setLoading(false)
        setThoughts(data)
      })
  }

  useEffect(() => {
    fetchPosts();
  }, [])


  const addNewThought = (newThought) => {
    setThoughts([newThought, ...thoughts]); // New thought will be displayed at the top
  };








  return (
    <>
      <div className="main-wrapper">
      <Header />
        <NewPost  onNewThought={addNewThought} />
           {loading ? (
        <p>Loading...</p>
      ) : (
        <Message thoughts={thoughts} />
      )}
        <Footer />
      </div>
    </>
  )
    
};