import React, {useState} from 'react'

export const HeartBtn = ({id, hearts}) => {
  const [heart, setHeart] = useState(0) //state for handling likes

     const handleHeartSubmit = async() => {
        console.log("like")
        setHeart(heart + 1)

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
            })

     }
  return (
    <div>
      <button onClick = {handleHeartSubmit}>❤️</button> x {hearts}
    </div>
  )
}
