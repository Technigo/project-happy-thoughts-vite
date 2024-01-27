import { useState , useEffect } from "react";
import { Header } from "./Components/Header";
import { Thoughts } from "./Components/Thoughts";
import { FormMessage } from "./Components/FormMessage";



export const App = () => {
  const [thoughts , setThoughts] = useState([]);
  const [loading , setLoading] = useState(true)

  const fetchThoughts = async () =>{
    await fetch("https://happy-thought.onrender.com/thoughts")
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

  const postLike = async (id) =>{

    const res = await fetch(`https://happy-thought.onrender.com/thoughts/${id}/like` , {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({})
    })

  
    if(res.ok){
      fetchThoughts()
      return
    }else{
      alert("Error")
    }
  
   }

 const postMessage = async (message) =>{

  const res = await fetch("https://happy-thought.onrender.com/thoughts" , {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({ message: message  })
  })

  if(res.ok){
    const data = await res.json()
    setThoughts((t) => [data, ...t])
    return
  }else{
    throw new Error("unable to post message" + res.statusText)
  }



 }




  return (<div className="container">
    <Header />
    <FormMessage onPost={postMessage} />
    <Thoughts list={thoughts} load={loading} like={postLike} />

  </div>) 
};
