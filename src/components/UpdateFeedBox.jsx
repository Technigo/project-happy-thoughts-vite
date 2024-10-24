import "./UpdateFeedBox.css"



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

        const handleSubmit = (event) => {

        }

        return (
            <form className="update-feed-box" onSubmit={handleSubmit}>
    
                <p className="uf-feed-text">p</p>
                <input type="text" placeholder="React is making me happy!" />
    
                <button onSubmit={}>
                    <img src="" alt="" />
                    Send Happy Thought
                
                </button>
            </form>
        )
    }
    
    export {UpdateFeedBox}