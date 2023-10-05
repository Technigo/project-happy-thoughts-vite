import { useState, useEffect } from "react"

export const RecentHappyThoughts = () => {
    const [recentThoughts, setRecentThoughts] = useState([])

    useEffect(() => {
        fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
            .then(Response => Response.json())
            .then(data => {
                setRecentThoughts(data)
                console.log(data)
            })
            .catch(error => console.error('Error fetching data:', error))
        console.log(recentThoughts)
    }, [])

    return (
        <div>
            <ul className="recentList">
                {recentThoughts.map(thought => (
                    <li className="recentBoxes" key={thought._id}>
                        {thought.message}
                    </li>
                ))}
            </ul>
        </div>
    )
}