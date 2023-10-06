import { Header } from "./components/header/Header";
import { PostThought } from "./components/PostThought/PostThoughts";
import { ThoughtCard } from "./components/PostThought/PostThoughts";
import "./app.css"
import { useEffect } from "react";


//api url
const API = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";



const fectchThought = async () => {
  await fetch(API)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Handle successful response data
    })
    .catch(error => {
      // Handle error here, e.g., display an error message to the user
      console.error('Error:', error);
    });

};

useEffect(() => {
  fectchThought();
}, [])

export const App = () => {
  return (
    <section className="app-wrapper">
      <Header />
      <PostThought API={API} />
      <ThoughtCard API={API} />
    </section>
  );
};






