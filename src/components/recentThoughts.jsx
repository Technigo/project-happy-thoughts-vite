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
    }, [])

    return (
        <div>
            {recentThoughts.map((thought, index) => (
                <div key={index}>{thought}</div>
            ))}
        </div>
    )
}


