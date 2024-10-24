import { useState, useEffect } from "react"
import { ThoughtsForm } from "./form/ThoughtForm"
import { ThoughtList } from "./list/ThoughtList"

export const HappyThoughts = () => {
    const [thoughts, setThoughts] = useState()
    const [loading, setLoading] = useState(true)
    const [newThought, setNewThought] = useState("")


    const GET_URL = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts"
    const POST_URL = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts"

    // fetch from url to load the thoughts

    const fetchThoughts = async () => {
        setLoading(true)
        const response = await fetch(GET_URL)
        const data = await response.json()
        // console.log(data)
        setThoughts(data)
        setLoading(false)
    }

    // function to send the new thought
    const handleFormSubmit = async (e) => {
        e.preventDefault()
        if (newThought.trim() === "") {
            return
        }

        const response = await fetch(POST_URL, {
            method: "POST",
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify({ message: newThought })
        })
        if (response.ok) {
            setNewThought("")
            fetchThoughts()
        }
    }

    useEffect(() => {
        fetchThoughts()
    }, [])

    return (
        <section>
            <h2>Happy Thoughts</h2>
            <ThoughtsForm
                newThought={newThought}
                setNewThought={setNewThought}
                handleFormSubmit={handleFormSubmit}
            />

            {loading ? <p>loading...</p> : (
                <ThoughtList thoughts={thoughts} />
            )}
        </section>
    )
}

