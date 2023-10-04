import { useState } from 'react'

export const UpdateHearts = (props) => {

    // const [heartsCount, setHeartsCount] = useState("");


    // const options = {
    //     method: "POST",
    //     body: JSON.stringify({
    //         message: `${newPost}`,
    //     }),
    //     headers: { "Content-Type": "application/json" },
    // };

    // await fetch(
    //     "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts",
    //     options
    // )
    //     .then((response) => response.json())
    //     .then((data) => {
    //         updating(data);
    //         setNewPost("");
    //         fetchPosts();
    //     })
    //     .catch((error) => console.log(error));


    return (

        <div>
            <p>
                {props.hearts}
            </p>
        </div>
    );
}