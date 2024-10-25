import "./UpdateFeedBox.css"
import { useState } from "react"



    const UpdateFeedBox = (props) => {
        const [happyThought, sethappyThought] = useState("")

        const handleSubmitHappyThought = async (event) => {
            event.preventDeafault()

            const response = await fetch(URL)
            const data = await response.json()
            sethappyThought(data)
        } 


        return (
            <form className="update-feed-box" onSubmit={handleSubmitHappyThought}>
    
                <p className="uf-feed-text">What's making you happy right now?</p>
                <textarea 
                type="text" 
                value={happyThought}
                placeholder="React is making me happy!" 
                onChange={(e) => sethappyThought(e.target.value)}
                />
    
                <button type="submit">
                    <span>❤️</span>
                    <span>Send Happy Thought</span>
                    <span>❤️</span>
                </button>
            </form>
        )
    }
    
    export {UpdateFeedBox}