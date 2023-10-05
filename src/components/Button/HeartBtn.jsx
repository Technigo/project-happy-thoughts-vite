import React, {useState} from 'react'
import "./heartBtn.css"

export const HeartBtn = ({id, hearts}) => { //destructured property keys sent as props
  //State to keep track of the number of hears 
  const [heart, setHeart] = useState(hearts) 
  
  //API endpoint for liking a post with the given 'id'
  const likeAPI = `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${id}/like`

  //Funtction to handle the submission of a heart
  const handleHeartSubmit = () => {
      (async () => {
        try {
          //Sending a post request to the like API
          const response = await fetch(likeAPI,{ 
            method: "POST",
            headers: {"Content-Type": "application/json"}, //Informing the server that JSON data is sent
          })

          //Checking if the response status is not OK (e.g., an error occurred)
          if (!response.ok) {
            throw new Error (`HTTP error! Status: ${response.status}`)
          }
          //Parsing the response data as JSON
          const data = await response.json()
          //Updating the 'heart' state with the new number of hears (likes)
          setHeart(data.hearts)
        } catch (error){
          //Handling any errors that occur during the process
          console.error ('Error liking post:', error)
        
        }
      })()
    }
  
  return (
    <div className="like-button-wrapper">
      <button onClick = {handleHeartSubmit}>❤️</button> x{heart}
    </div>
  )
}
