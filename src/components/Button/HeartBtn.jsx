import React, {useState} from 'react'

export const HeartBtn = ({id, hearts}) => { //destructured property keys sent as props
  const [heart, setHeart] = useState(hearts) //state for handling likes

     const handleHeartSubmit = async() => {
        console.log("like")
        // setHeart((prevHeart) => prevHeart + 1)

        console.log(id)
        const likeAPI = `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${id}/like`

        await fetch(likeAPI
            ,{ 
          method: "POST",
          headers: {"Content-Type": "application/json"}, //Informing the server that JSON data is sent
            }
        )
            .then((response) => response.json())
            .then ((data)=>{
                console.log(data)
                setHeart(data.hearts)
            })

     }
  return (
    <div>
      <button onClick = {handleHeartSubmit}>❤️</button> x {heart}
    </div>
  )
}
