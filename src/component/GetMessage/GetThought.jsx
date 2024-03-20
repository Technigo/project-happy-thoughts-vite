import {useState, useEffect} from "react";
// import { SingleThought } from "../singleThought";

export const GetThought = () => {
    const [oldThoughts, setOldThoughts] = useState('')
    const [loading, setLoading] = useState(true)

    const URL = 'https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts'

    useEffect (()=>{
        const fetchData = async () =>{
          try {
            const res = await fetch(URL)
            const data = await res.json()
            setOldThoughts(data)
          } catch (error) {
            console.error('Error fetching data:', error)
          } finally {
            setLoading(false)
          }
        }
        fetchData()
  
        const intervalID = setInterval(fetchData, 5000)
  
        return () => {
          clearInterval(intervalID)
        }
      }, [])

    //   const timeFormat = (createdAt) => {
    //     const currentTime = new Date ()
    //     const postTime = new Date (createdAt)
    //     const timeDifferentInSec = Math.floor(currentTime - postTime) /1000 //make the time to second
    //     const timeDifferentMin = Math.floor(timeDifferentInSec /60) //the time less than one hour, how many min in one hour
    //     const timeDifferentHour = Math.floor(timeDifferentMin * 24) //how many seconds in one day 

    //     if (timeDifferentInSec < 60) {
    //         return `${timeDifferentInSec} S ago`
    //     } else if (timeDifferentMin < 3600){
    //         return ``
    //     }

        
    //   }
      return(
        <>
        <div className="loadingContainer">
            {loading ? (<p>Loading...</p>) : <div className="get-thought-wrapper">
        {oldThoughts.map((oldThought)=>{
          return(
            // <SingleThought key={oldThought.id} message={oldThought.message} hearts={oldThought.hearts} createdAt={oldThought.createdAt} />
            <>
              <div className="oldThoughtContainer" key={oldThought.id}>
                <p>{oldThought.message}</p>
                <p>❤️ {oldThought.hearts}</p>
                <p>{oldThought.createdAt}</p>
             </div>
            </>
          ) 
        }
        )}
      </div>}
        </div> 
        </>   
      )

      


}