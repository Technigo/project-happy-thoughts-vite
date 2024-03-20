import { useState } from "react";

export const PostForm = () => {
  const [error, setError] = useState(null);
  const [message, setMessage] = useState();
  const [success, setSuccess] = useState(false);

  const handleInputChange = e => setMessage(e.target.value)
  const URL = 'https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts'

  const handleSubmit = async (e) => {
    setMessage({
        ...message,
        message: e.target.value,
    })
    e.preventDefault()
    try {
        const res = await fetch (URL, {
            method: 'POST',
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify({message}),
        })
        if (!res.ok) {throw new Error ('Network response was not ok')}
        setSuccess(true)
    } catch (error) {setError(error.message)}
} 
  return (
    <>
      {error && <div>Error: {error}</div>}
      {success && <div>Your thoughts hase been sent successfully!</div>}
      <form>
        <label onSubmit={handleSubmit}>
            <h2>What&apos;s making you happy right now?</h2>
            <input 
              type="text" 
              name="text" 
              value={message} 
              onChange={handleInputChange} 
              id="text" /> 
        </label>
        <div>
            <button >❤️ Send Happy Thought ❤️</button>
        </div>
      </form>
    </>
  );
};
// export const PostForm = (newThought) => {
//     const [message, setMessage] = useState ([])
//     const URL = 'https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts'

//     const handleFormSubmit = (event) => {
//         event.preventDefault()
//         fetch(URL, {
//             method: 'POST',
//             headers: {'Content-Type': 'application/json',},
//             body: JSON.stringify({message: newThought})
//         })
//           .then((res)=> res.json())
//           .then(newThough => {setMessage(prevMessages => [newThough, ...prevMessages])})
//           .catch(error => console.error('Error posting thought:', error))
//     }
//     return(
//         <div className="post-wrapper">
//             <h2>What is making you happy right now?</h2>
//             <PostForm onThoughtSubmit={handleFormSubmit} />
//         </div>
//     )
// }
   