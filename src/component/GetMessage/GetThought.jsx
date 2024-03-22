import {useState, useEffect} from "react";
// import { SingleThought } from "../singleThought";

export const GetThought = () => {
    const [oldThoughts, setOldThoughts] = useState([])
    const [loading, setLoading] = useState(true)
    const [newThoughts, setNewThoughts] = useState('')
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(false)
    // heart and its button => another component?
    //message length 
    //text box required

    const URL = 'https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts'

    const handleInputChange = e => setNewThoughts(e.target.value)

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

      const handleFormSubmit = e => {
        e.preventDefault()

        fetch(URL,{
            method: 'POST',
            body: JSON.stringify ({message: newThoughts}),
            headers: { "Content-Type": "application/json" },
        })
          .then(res => res.json())
          .then((newThought) => {
            setNewThoughts('')
            setNewThoughts((oldThoughts)=> [newThought, ...oldThoughts])
            setSuccess(true)
            setError(null)
          })
          .catch(error => {
            console.error('Error sending thought:', error)
            setError(error.message)
            setSuccess(false)
          })
      }



      const timeFormat = (createdAt) => {
        const currentTimeSec = new Date ()/1000
        const postTimeSec = new Date (createdAt) /1000 //convert the time to second
        const timeDifferentSec = Math.floor(currentTimeSec - postTimeSec)
        const timeDifferentMin = Math.floor(timeDifferentSec /60) // convert second to mins
        const timeDifferentHour = Math.floor(timeDifferentMin / 60) // convert minute to hours
        const timeDifferentDay = Math.floor (timeDifferentHour / 24) // convert hours to day
        // 3600 sec in an hour
        //86400 sec in one day

        if (timeDifferentSec === 0){return `just now`}
        else if (timeDifferentSec >=0 && timeDifferentSec < 60) {
            return timeDifferentSec ===1 ? `${timeDifferentSec} second ago` : `${timeDifferentSec} seconds ago`
        } else if (timeDifferentSec >= 60 && timeDifferentSec < 3600){
            return timeDifferentMin === 1 ? `${timeDifferentMin} minute ago` : `${timeDifferentMin} minutes ago`
        } else if (timeDifferentSec >= 3600 && timeDifferentSec< 86400){
            return timeDifferentHour === 1 ? `${timeDifferentHour} hour ago` : `${timeDifferentHour} hours ago`
        } else { return timeDifferentDay === 1 ? `${timeDifferentDay} day ago` : `${timeDifferentDay} day ago`}
      }

      return(
        <>
        {error && <div>Error: {error}</div>}
        {success && 
        <form onSubmit={handleFormSubmit}>
            <label >
                <h2>What&apos;s making you happy right now?</h2>
                    <input 
                      type="text" 
                      name="text" 
                      value={newThoughts} 
                      onChange={handleInputChange} 
                      id="text" /> 
            </label>
        <div className="submit-wrapper">
            <button >❤️ Send Happy Thought ❤️</button>
        </div>
        </form>
        }
    

        <div className="loadingContainer">
            {loading ? (<p>Loading...</p>) : <div className="get-thought-wrapper">
        {oldThoughts.map((oldThought)=>{
          return(
            <>
              <div className="oldThoughtContainer" key={oldThought.id}>
                <p>{oldThought.message}</p>
                <p>❤️ {oldThought.hearts}</p>
                <p>{timeFormat(oldThought.createdAt)}</p>
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