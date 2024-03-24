import {useState, useEffect} from "react";
import { NewThoughtsForm } from "../newThought/NewThoughtsForm";
import moment from 'moment';
import './getThought.css';

// import {formatDistance} from "date-fns";
// import { HeartButton } from "./HeartButton";
// import { SingleThought } from "../singleThought";

export const GetThought = () => {
    const [oldThoughts, setOldThoughts] = useState([])
    const [loading, setLoading] = useState(true)
    const [newThoughts, setNewThoughts] = useState('')
    const [error, setError] = useState(null)
    const [isLiked, setIsLiked] = useState (false)
    // const [likes, setPostLike] = useState(0)
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
            setError(alert('Please write 5 to 140 characters.'))}

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
      
      // const timeFormat = (createdAt) => {
      //   const currentTimeSec = new Date ()/1000
      //   const postTimeSec = new Date (createdAt) /1000 
      //   const timeDifferentSec = Math.floor(currentTimeSec - postTimeSec)
      //   const timeDifferentMin = Math.floor(timeDifferentSec /60) 
      //   const timeDifferentHour = Math.floor(timeDifferentMin / 60) 
      //   const timeDifferentDay = Math.floor (timeDifferentHour / 24) 
        // 3600 sec in an hour
        //86400 sec in one day

      //   
      
      const timeFormat = date => {
        const currentTime = new Date (date)
        return moment (currentTime).fromNow()
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
                setIsLiked(!isLiked)
            } else throw new Error ('Failed to like the thought')
        } catch (error) {
            console.error('Error liking the thought:', error)
        }
      }
      return(
        <>
        {error && <div>Error: {error}</div>}
        <NewThoughtsForm handleFormSubmit={handleFormSubmit} newThoughts={newThoughts} handleInputChange={handleInputChange} />
        <div className="thought-container">
            {loading ? (<p>Loading...</p>) : <div className="get-thought-wrapper">
        {oldThoughts.map((oldThought)=>{
          return(
            <>
              <article className="old-thought-container" key={oldThought._id}>
                <p aria-label="previous messages">{oldThought.message}</p>
                <div aria-label="heart buttons" className="like-post-time">
                  <p>
                    <span>
                    <button className="heart-button" 
                    onClick={() => handleLikeThought(oldThought._id)}
                    style = {{backgroundColor: isLiked && '#FFADAD'}}>❤️</button>
                    </span>
                    × {oldThought.hearts}
                  </p>
                  <time dateTime = {timeFormat(oldThought.createdAt)}>
                  {timeFormat(oldThought.createdAt)}
                  </time>
                </div> 
             </article>
            </>
          ) 
        }
        )}
      </div>}
        </div> 
        </>   
      )
}