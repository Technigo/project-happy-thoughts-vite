import { useState , useEffect } from "react";
import { Header } from "./Components/Header";
import { Thoughts } from "./Components/Thoughts";
import { FormMessage } from "./Components/FormMessage";



export const App = () => {
  const [thoughts , setThoughts] = useState([]);
  const [loading , setLoading] = useState(true)

  const fetchThoughts = async () =>{
    await fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setThoughts(data)
      setLoading(false)

    } )
    .catch(error => console.error('Error fetching data:' , error))

  }
  useEffect(()=>{
    fetchThoughts()
  } , [])




  return (<div>
    <Header />
    <FormMessage />
    <Thoughts list={thoughts} load={loading} />

  </div>) 
};
