import { useState } from "react";

export const Text = () => {
    
    const [body, setBody] = useState('')
    const [response, setResponse] = useState(null)

    const handleSubmit = async (event) => {
        event.preventDefault()

        const URL = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts"

        try {
            const res = await fetch(URL, {
                method: "POST",
                headers: {
                    "content-type": "application/json; charset=utf-8"
                }, //this is a way to send extra information to our API. Some request an API key as a header or access tokens: 'AccessToken': 'myaccesstoken'
                body: JSON.stringify({
                    // title, //write it like this if our name for it is different title: titleText. same for body
                    message: body
                    // userID: 1 -optional
            })
        })

            const data = await res.json()
            setResponse(data) //this is optional. it displays the post and shows it to the user in the browser  
        }   catch (error) {
            console.log("error:", error)
        }
    }



    return (
        <section>
            <h2>Submit a port</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Body:
                    <textarea 
                    value={body}
                    onChange={(e) => setBody(e.target.value)} />
                </label>
                <button type="submit">Submit</button>
            </form>

            {response && ( //response can be && body or title or titleText. depending on how specified i want to be 
                <div>
                    <h2>Response from API</h2>
                    {/* pre means preformatted and the rest makes it look like a json response in the browser */}
                    <pre>{JSON.stringify(response, null, 2)}</pre> 
                </div>
            )}
        </section>
    )
}