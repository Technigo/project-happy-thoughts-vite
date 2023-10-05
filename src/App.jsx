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

  const postLike = async (id) =>{

    const res = await fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${id}/like` , {
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

  const res = await fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts" , {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({ message: message  })
  })

  if(res.ok){
    const data = await res.json()
    setThoughts((t) => [data, ...t])
    return
  }else{
    alert("Error")
  }



 }




  return (<div>
    <Header />
    <FormMessage onPost={postMessage} />
    <Thoughts list={thoughts} load={loading} like={postLike} />

  </div>) 
};
