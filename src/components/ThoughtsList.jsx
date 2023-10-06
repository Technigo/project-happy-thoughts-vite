import React, { useState, useEffect } from 'react';
import { SingleThought } from "./SingleThought";

    export const ThoughtsList = ({ thoughts }) => {
    const [loading, setLoading] = useState(true);
    const [apiThoughts, setApiThoughts] = useState([]);

    useEffect(() => {
        const messageAPI = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(messageAPI);
                const data = await response.json();
                console.log('Data from API;', data);
                if (Array.isArray(data) && data.length > 0 && data[0]._id)  {
                    setApiThoughts(data);
                }
            } catch (error) {
                console.error('Error fetching thoughts', error);
            }finally {
                setLoading(false);
            }
        };
            fetchData();
    }, []);

   
    return (
    <div className="ThoughtsList">
        {apiThoughts.reverse().map((thought) => (
            <SingleThought key={thought._id} message={thought.message} />
        ))}
    </div>
  );
};


export default ThoughtsList;