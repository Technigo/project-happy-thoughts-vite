import Lottie from "lottie-react";
import fetchingDataAnim from "../../assets/fetching.json";
import "./loading.css"

export const Loading = () => {
    return (
        <>
            <p id="loading">Think about something nice while we load all thoughts 💚</p>
            <Lottie animationData={fetchingDataAnim} loop={true} />
        </>
    )
}
