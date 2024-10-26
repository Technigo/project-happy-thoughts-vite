import { useState, useEffect } from "react"
import { fetchThoughts } from "./api"

// this is a hook that fetched the thoughts/messages and manages the loading state
export const useFetchThoughts = () => {
    const [thoughts, setThoughts] = useState([])
    const [loading, setLoading] = useState(true)

    // this function fetched thoughts from the API and updates the state
    const getThoughts = async () => {
        setLoading(true)
        const data = await fetchThoughts()
        setThoughts(data)
        setLoading(false)
    }
    useEffect(() => {
        getThoughts()
    }, [])

    return { thoughts, setThoughts, loading, getThoughts }
}