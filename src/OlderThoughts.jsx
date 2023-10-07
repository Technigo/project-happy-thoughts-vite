import { useState, useEffect } from "react"

export const OlderThoughts = () => {

const [olderThoughts, setOlderThoughts] = useState([]);

const thoughtsAPI = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

useEffect(() => {
    fetchHappyThoughts();
}, [])

const fetchHappyThoughts = () => {
    fetch(thoughtsAPI)
    .then((response) => response.json())
    .then((data) => {
        setOlderThoughts(data);
        console.log(setOlderThoughts)
    })
    .catch((error) => {
        console.log("failed to fetch thoughts", error );
    });
}


  return (
    <div>
        <ul>
            {olderThoughts.map(olderThought => (
                <li className="thoughtBox" key= {olderThought._id}>
                    {olderThought.message}
                    <p>
                        <button className="heart"> <img className="heart-img" src="./public/assets/heart-like-button.png" alt="heart"></img>
                        </button>
                    </p>
                </li>
            ))}
        </ul>
    </div>
  )
}

