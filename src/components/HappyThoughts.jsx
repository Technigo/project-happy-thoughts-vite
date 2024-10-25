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

    const handleLike = async (thoughtId) => {
        try {
            const response = await fetch(`${POST_URL}/${thoughtId}/like`, {
                method: "POST",
            });

            if (!response.ok) throw new Error('Failed to like thought');

            // Update the local state instead of refetching all thoughts
            setThoughts(prevThoughts =>
                prevThoughts.map(thought =>
                    thought._id === thoughtId
                        ? { ...thought, hearts: thought.hearts + 1 }
                        : thought
                )
            )

        } catch (error) {
            console.error("Error liking thought:", error);
        }
    }


    useEffect(() => {
        fetchThoughts()
    }, [])

    return (
        <section>

            <ThoughtsForm
                newThought={newThought}
                setNewThought={setNewThought}
                handleFormSubmit={handleFormSubmit}
            />

            {loading ? <p>loading...</p> : (
                <ThoughtList
                    thoughts={thoughts}
                    onLike={handleLike}

                />
            )}
        </section>
    )
}

