import {useState, useEffect} from "react";
// import { HeartButton } from "./HeartButton";
// import { SingleThought } from "../singleThought";

export const GetThought = () => {
    const [oldThoughts, setOldThoughts] = useState([])
    const [loading, setLoading] = useState(true)
    const [newThoughts, setNewThoughts] = useState('')
    const [error, setError] = useState(null)
    // const [heartsCount, setHeartsCount] = useState()
    
    // const [heartsAmount, setHeartsAmount] = useState('')
    // const [clickHeart, setClickHeart] = useState(0)
    // const [success, setSuccess] = useState(false)
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

      const handleFormSubmit = (e) => {
        e.preventDefault()
       

        if (newThoughts.length < 5 || newThoughts.length >140) {
            setError('Please write 5 to 140 characters.')}

        fetch(URL,{
            method: 'POST',
            body: JSON.stringify ({message: newThoughts}),
            headers: { "Content-Type": "application/json" },
        })
          .then(res => res.json())
          .then((newThought) => {
            setNewThoughts('')
            setNewThoughts((oldThoughts)=> [newThought, ...oldThoughts])
            // setSuccess(true)
            setError(null)
          })
          .catch(error => {
            console.error('Error sending thought:', error)
            setError(error.message)
            // setSuccess(false)
          })
      }

        // fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${oldThoughts.id}/like`, {
        //     method: 'POST',
        //     headers: {'Content-Type': 'application/json'},
        //     body: ({hearts: heartsAmount})
        // })
        //   .then(res => res.json())
        //   .then(() => {
        //     oldThoughts.map(oldThought => {
        //         setHeartsAmount('')
        //         {oldThought.id ? {...oldThought, hearts: heartsAmount} : oldThought}
        //     },
        //     setClickHeart(prev => prev + 1)
        //     )
        //   })
      
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

      const handleLikeThought = async (thoughtId) => {
        try {
            const res = await fetch (`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thoughtId}/like`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (res.ok) {
                const updatedLikeThought = oldThoughts.map (oldThought => 
                    oldThought._id === thoughtId ? {...oldThought, hearts: oldThought.hearts + 1} : oldThought
                )
                setOldThoughts(updatedLikeThought)
            } else throw new Error ('Failed to like the thought')
        } catch (error) {
            console.error('Error liking the thought:', error)
        }
      }

      return(
        <>
        {error && <div>Error: {error}</div>}
        <form onSubmit={handleFormSubmit}>
            <label >
                <h2>What&apos;s making you happy right now?</h2>
                    <input 
                      type="text" 
                      name="text" 
                      placeholder="Write your thought here"
                      minLength={5}
                      maxLength={140}
                      value={newThoughts} 
                      onChange={handleInputChange} 
                      id="text" />
            </label>
        <div className="submit-wrapper">
            <button >❤️ Send Happy Thought ❤️</button>
        </div>
        </form>
        
    

        <div className="loadingContainer">
            {loading ? (<p>Loading...</p>) : <div className="get-thought-wrapper">
        {oldThoughts.map((oldThought)=>{
          return(
            <>
              <div className="oldThoughtContainer" key={oldThought._id}>
                <p>{oldThought.message}</p>
                <p>
                    <span><button className="heart-button" onClick={() => handleLikeThought(oldThought._id)}>❤️</button></span> 
                    {oldThought.hearts}
                </p>
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