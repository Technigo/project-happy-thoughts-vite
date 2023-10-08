import { HappyThought } from './HappyThought.jsx'
import { useState, useEffect } from 'react'

export const Feed = () => {
    const [thoughts, setThoughts] = useState([])

    useEffect(() => {
        fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
        .then(data => data.json())
        .then(json => setThoughts(json))
    })

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

// API for 20 recent posts GET https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts