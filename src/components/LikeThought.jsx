import { useState } from 'react'
import PropTypes from 'prop-types'

export const LikeThought = ({ message, URL, index, renderThoughts }) => {

  const [like, setLike] = useState(message.hearts)
  const [newLike, setNewLike] = useState(false)
  console.log(like)
  console.log(newLike)
  const id = message._id

  const handleClick = async (event) => {
    event.preventDefault();
    setLike(like + 1);
    setNewLike((prev) => !prev)

    fetch(URL, {
      method: 'POST',
      body: JSON.stringify({hearts: like}),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => {
        setLike(data.hearts)
    })
      .catch((err) => {
        console.log(err)
      })
    renderThoughts()
  }


  return (
    <>
      <div id="likes">
        <button type="button" className="heart" id={index} value={id} onClick={handleClick}>
          ❤️
        </button>
        <div id="amount">x{message.hearts}</div>
      </div>
    </>
  )
}

LikeThought.propTypes = {
  message: PropTypes.object.isRequired,
  URL: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  renderThoughts: PropTypes.function.isRequired,
}

/*
  useEffect (()=> {
    fetch(URL, {
        method: 'POST',
        body: JSON.stringify({  }),
        headers: { 'Content-Type': 'application/json' },
      })
        .then((response) => response.json())
        .then((like) => {
          setThoughts((previousThoughts) => [nextThought, ...previousThoughts])
          setNewThought('')
          
        })
        .catch((err) => {
          console.log(err)
        })

   }, [like]) 

       const [like, setLike] = useState (false) 

    console.log(like)

    onClick={setLike(true)}*/
