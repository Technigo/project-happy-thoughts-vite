import { useState, useEffect } from "react"
import { UpdateHearts } from './likeHeart'
import { HappyTime } from './HappyTime'

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
    }, [])//Empty array - needed to make sure it only consolelogs once

    return (
        <div>
            <ul className="recentList">
                {recentThoughts.map((thought) => (
                    <li className="recentBoxes" key={thought._id}>
                        <p>{thought.message}</p>
                        <div>
                            <div className="summaryLine">
                                <UpdateHearts heartID={{ heartID: thought._id, heartCount: thought.hearts }} />
                                <p><HappyTime createdAt={thought.createdAt} /></p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}