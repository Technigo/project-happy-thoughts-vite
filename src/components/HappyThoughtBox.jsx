import "./HappyThoughtBox.css"
import React, { useEffect, useState } from 'react';

const URL = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts"

/* 

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
    const [happyFeed, getHappyFeed] = useState()

    const GetFeedHappyThought = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        getHappyFeed(data)
    } 

    return (
        <article className="happy-thought-box">

            <p className="hp-feed-text">{data.message}</p>

            <div className="hp-footer">
                <img className="hp-like" src="{data.}"/>
                <div className="hp-time">{data.createdAt}</div>
            </div>
        </article>
    )
}

export {HappyThoughtBox}