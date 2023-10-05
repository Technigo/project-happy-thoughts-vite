// eslint-disable-next-line no-unused-vars
import React,  { useState, useEffect } from 'react';



const HappyThoughts = () => {
    const [thoughts, setThoughts] = useState([]);
  
    useEffect(() => {
      fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
        .then(res => res.json())
        .then(json => {
          console.log(json);
        });
    }, []); // Empty dependency array to trigger the effect only once
  
    return (
      <div>Happythoughts</div>
    );
  };

  export default HappyThoughts;