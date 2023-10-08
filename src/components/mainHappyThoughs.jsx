import { RecentHappyThoughts } from "./recentThoughts"
import { NewHappyThought } from "./newThought"
import { useEffect } from "react"

export const MainHappyThoughts = () => {
    const newMessage = (data) => {
        // Define the behavior of newMessage function
        console.log("New message:", data)
    }

    const fetchThought = () => {
        //Define the behavior of fetchThought function
        console.log("Fetching thoughts...")
    }

    useEffect(() => {
        fetchThought(); // Fetch thoughts when the component mounts
    }, []);

    return (
        <div>
            <h1>Header</h1>
            <div className="newThoughts-container">
                <NewHappyThought newMessage={newMessage} fetchThought={fetchThought} />
            </div>
            <div className="recentThoughts-container">
                <RecentHappyThoughts />
            </div>
        </div>
    )
}
