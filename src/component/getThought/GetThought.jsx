import {useState, useEffect} from "react";
import { NewThoughtsForm } from "../newThought/NewThoughtsForm";
import moment from "moment";
import "./getThought.css";

export const GetThought = () => {
    const [oldThoughts, setOldThoughts] = useState([])
    const [loading, setLoading] = useState(true)
    const [newThoughts, setNewThoughts] = useState('')
    const [error, setError] = useState(null)

    const URL = 'https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts'

    const handleInputChange = e => setNewThoughts(e.target.value)

    useEffect (()=>{
      setLoading(true)
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

        if (newThoughts.length === 0){
          setError(alert('You can&apos;t send an empty message.'))
        } else if (newThoughts.length < 5 || newThoughts.length >140){
          setError(alert('Please write 5 to 140 characters.'))
        } else ('Typing undefine')

        fetch(URL,{
            method: 'POST',
            body: JSON.stringify ({message: newThoughts}),
            headers: { "Content-Type": "application/json" },
        })
          .then(res => res.json())
          .then((newThought) => {
            setNewThoughts('')
            setNewThoughts((oldThoughts)=> [newThought, ...oldThoughts])
            setError(null)
          })
          .catch(error => {
            console.error('Error sending thought:', error)
            setError(error.message)
          })
      }
      
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
                // setIsLiked(!isLiked)
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
                    <button className="like-button"
                    onClick={() => handleLikeThought(oldThought._id)}>❤️</button>
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