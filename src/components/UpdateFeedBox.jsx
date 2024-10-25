import "./UpdateFeedBox.css"
import heart from "../assets/happy-thoughts.svg"


/* const HappyThought = (props) => {

    return (
        <div className="happy-thought-div">
            {data.albums.items.map((album) =>

            )}
        </div>
    )
}

const LikesNumber = (props) => {

    return (
        <div className="likes-number-div">
            {data.albums.items.map((album) =>

            )}
        </div>
    )
}

const LikesTimeAgo = (props) => {

    return (
        <div className="likes-time-ago-div">
            {data.albums.items.map((album) =>

            )}
        </div>
    )
} */

    const UpdateFeedBox = (props) => {

        const UpdateFeedPost = async () => {
            const response = await fetch(URL)
            const data = await response.json()
            /* setHappyFeed(data) */
        } 

        const handleSubmit = (event) => {

        }

        return (
            <form className="update-feed-box" onSubmit={handleSubmit}>
    
                <p className="uf-feed-text">p</p>
                <input type="text" placeholder="React is making me happy!" />
    
                <button onSubmit={handleSubmit}>
                    <img src={heart} width={30} alt="Heart - Submit a happy thought" />
                    <span>Send Happy Thought</span>
                    <img src={heart} width={30} alt="Heart - Submit a happy thought" />
                </button>
            </form>
        )
    }
    
    export {UpdateFeedBox}