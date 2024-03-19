import { useState } from "react";

export const PostForm = () => {
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({message: ''});
  const [success, setSuccess] = useState(false);

  const handleInputChange = e => setFormData(e.target.value)

  const handleSubmit = async (e) => {
    setFormData({
        ...formData,
        message: e.target.value,
    })
    e.preventDefault()
    try {
        const res = await fetch ('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', {
            method: 'POST',
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify(formData),
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
        <label>
            <h2>What&apos;s making you happy right now?</h2>
            <input 
              type="text" 
              name="text" 
              value={formData.message} 
              onChange={handleInputChange} 
              id="text" /> 
        </label>
        <div>
            <button onClick={handleSubmit}>❤️ Send Happy Thought ❤️</button>
        </div>
      </form>
    </>
  );
};

   