import { useState, useEffect } from "react";

//Fetch Happy thougts from API server
export const HappyThought = () => {
    const [thoughts, setThoughts] = useState([]);
    const [newThought, setNewThought] = useState("");

    useEffect(() => {
        fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
            .then((res) => res.json())
            .then((json) => {
                setThoughts(json);
                console.log(json)
            })
            .cath((error) => {
                console.error("Error loading thoughts", error);
            })
    }), [];

}
