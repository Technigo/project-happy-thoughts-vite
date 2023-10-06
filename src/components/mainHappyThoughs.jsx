import { RecentHappyThoughts } from "./recentThoughts"
import { NewHappyThought } from "./newThought"

export const MainHappyThoughts = () => {
    return (
        <div>
            <h1>Header</h1>
            <div className="newThoughts-container">
                <NewHappyThought />
            </div>
            <div className="recentThoughts-container">
                <RecentHappyThoughts />
            </div>
        </div>
    )
}