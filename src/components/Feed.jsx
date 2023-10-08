import { HappyThought } from './HappyThought.jsx'
import { useState, useEffect } from 'react'

export const Feed = () => {
    const [thoughts, setThoughts] = useState([])

    // Fetching the 20 newest messages in the API
    useEffect(() => {
        fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
        .then(data => data.json())
        .then(json => setThoughts(json))
    })

    // Displaying the new thoughts
    return (
        <div id="feed-container">
            {thoughts.map(thought =>
            <HappyThought 
                key={thought._id}
                message={thought.message}
                id={thought._id}/>
            )}
        </div>
    )
}