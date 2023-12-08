import React, { useState, useEffect } from 'react';
import SingleThought from "./SingleThought";
import '../index.css';

const ThoughtsList = ({ thoughts, onLike }) => {
    //Check if thoughts is an array and has elements
    if (!Array.isArray(thoughts)) {
        console.error('Invalid thoughts data:', thoughts);
        return null;
     }

     if (thoughts.length === 0) {
        console.log('Empty thoughts array.');
        return <p>No thoughts available.</p>;
    }
       
        
        return (
            <div className="ThoughtsList">
                {thoughts.map((thought, index) => (
                    <div className="thought-box" key={`${thought._id}-${index}`}>
                    <SingleThought key={thought._id} thought={thought} onLike={onLike} />
                    </div>
                ))}
            </div>
          );
        };
      

export default ThoughtsList;