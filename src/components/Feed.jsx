
import moment from 'moment'
import { useState } from 'react'


export const Feed = ({ thoughtsList, setThoughtsList }) => {

    console.log("thoughtsList:", thoughtsList)

   

    const onLikeIncrease = (singleThought) => {
        console.log("singleThought id:",singleThought._id);

        const LIKEAPI = `<https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/651de1e0065fdd0010048066/like`
        
        const options = {
            method: "POST",
            headers: { "Content-Type" : "application/json"}
        }

        fetch(LIKEAPI, options)
        .then((response) => response.json())
        .then((json) => console.log("LIKE JSON",json))

            
       
      
        

    }

    

    return (
        <section className="feed-section">
            {thoughtsList.map((singleThought) => {
                return (
                    <div className="post-wrapper" key={singleThought._id} >
                        <h3 className='post-message'>{singleThought.message}</h3>
                        <div className='button-time-wrapper'>
                            <div className='button-count-wrapper'>
                                <label className='like-label'>
                                    <button className='button-like' type="button" onClick={() => onLikeIncrease(singleThought)}>
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