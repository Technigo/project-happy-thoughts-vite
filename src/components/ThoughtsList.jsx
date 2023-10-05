import React, { useState, useEffect } from 'react'

export const ThoughtsList = ({ thoughts }) => {
    const [apiThoughts, setApiThoughts] = useState([]);

    useEffect(() => {
        const messageAPI = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

        const fetchData = async () => {
            try {
                const response = await fetch(messageAPI);
                const data = await response.json();
                if (Array.isArray(data) && data.length > 0 && data[0].message)  {
                    setApiThoughts(data);
                }
            } catch (error) {
                console.error('Error fetching thoughts', error);
            }
        };
        fetchData();
    }, []);
  
    return (
    <div className="ThoughtsList">
        {thoughts.map((thought, index) => (
            <div key={index} className="thought-item">
                {thought}
            </div>
        ))}
    </div>
  );
};

export default ThoughtsList;