import { useEffect, useState } from 'react'
import { SingleMessage } from "../SingleMessage/SingleMessage.jsx"
import "./PostedThoughts.css"

export const PostedThoughts = ({ fetchPosts }) => {
    const [postedThoughts, setPostedThoughts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', {
                method: 'GET',
            })

                if (response.ok) {
                    const data = await response.json()
                    setPostedThoughts(data)
                } else {
                    console.error('Failed to fetch posts')
                }
            } catch (error) {
                console.error('Error while fetching posts', error)
            }
        }

            fetchPosts()
    }, [])

    return (
        <div>
            {postedThoughts.map((singleMessage) => (
                <SingleMessage
                    key={singleMessage._id}
                    singleMessage={singleMessage}
                    fetchPosts={fetchPosts}
                />
            ))}
        </div>
    )
}