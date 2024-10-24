import "./HappyThoughtBox.css"


/* fetch()

const HappyThought = (props) => {

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

const HappyThoughtBox = (props) => {

    return (
        <article className="happy-thought-box">

            <p className="hp-feed-text">p</p>

            <div className="hp-footer">
                <div className="hp-like">like</div>
                <div className="hp-time">time</div>
            </div>
        </article>
    )
}

export {HappyThoughtBox}