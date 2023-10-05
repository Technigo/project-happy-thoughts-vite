import React, {useState, useEffect} from 'react'
import "./heartBtn.css"

export const HeartBtn = ({id, hearts}) => { //destructured property keys sent as props
  const [heart, setHeart] = useState(hearts) //state for handling likes
  const [loading, setLoading] = useState(false)

  const likeAPI = `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${id}/like`

    useEffect(() => {
    if (loading){ 
    
      (async () => {
        try {
          const response = await fetch(likeAPI,{ 
            method: "POST",
            headers: {"Content-Type": "application/json"}, //Informing the server that JSON data is sent
          })

          if (!response.ok) {
            throw new Error (`HTTP error! Status: ${response.status}`)
          }
          const data = await response.json()
          console.log(data)
          setHeart(data.hearts)
          setLoading(false)
        } catch (error){
          console.error ('Error liking post:', error)
          setLoading (false)
        }
      })()
    }
  }, [loading, id])

    const handleHeartSubmit = () => {
      setLoading(true)
    }

  return (
    <div className="like-button-wrapper">
      <button onClick = {handleHeartSubmit}>❤️</button> x{heart}
    </div>
  )
}
