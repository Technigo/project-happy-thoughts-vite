
import moment from 'moment'


export const Feed = ({ thoughts }) => {

    console.log("thoughts", thoughts)


    
    return (
        <section className="feed-section">
            {thoughts.map((singleThought) => {
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