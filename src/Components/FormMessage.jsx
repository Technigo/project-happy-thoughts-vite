import { useState } from "react";


export const FormMessage = () => {

  const [value, setValue] = useState("")
  const onSubmit = (e)=>{
    e.preventDefault();
    
  }

  const onChange = (e) => {
      setValue(e.target.value)
  }

  return (
    <div className="post-wrapper">
        <h3>What is making you happy right now?</h3>
        <form action="" onSubmit={onSubmit}>
            <textarea name="" id="" cols="30" rows="3" placeholder="Musuc , Love , Food..." value={value} onChange={onChange}></textarea>
            <div className="post-length">
              {value.length < 5 && value.length > 0 ? <p className="error">Your message is too short, it needs at least 5 letters </p> : <p></p>}
                
                <p className="length">{value.length}/120</p>

            </div>
            <button type="submit" className="post-btn" >
                <span className="emoji">❤️</span>
                Send Happy Thoughts
                <span className="emoji">❤️</span>
            </button>
        </form>

    </div>
  )
}
