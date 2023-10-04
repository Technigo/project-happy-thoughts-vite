
import moment from 'moment'


export const Feed = ({ thoughtsList }) => {

    const onLikeIncrease = async () => {

        const giveLikeApi = "<https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/THOUGHT_ID/like"

        const options = {
            method: "POST",
        }

        

    }

    console.log("thoughtsList", thoughtsList)

    return (
        <section className="feed-section">
            {thoughtsList.map((singleThought) => {
                return (
                    <div className="post-wrapper" key={singleThought.key}>
                        <h3 className='post-message'>{singleThought.message}</h3>
                        <div className='button-time-wrapper'>
                            <div className='button-count-wrapper'>
                                <label className='like-label'>
                                    <button className='button-like'>
                                        <img className="button-like-img" src="pixel-heart.png" alt="a pixelated heart"/>
                                    </button>
                                    <p>x {singleThought.hearts}</p>
                                </label>
                            </div>
                            <p key={singleThought.key}>
                            {moment(singleThought.createdAt).fromNow()}
                            </p>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}