import React, { useState, useEffect } from 'react';
import { SingleThought } from "./SingleThought";
import '../index.css';

const ThoughtsList = ({ thoughts, onLike }) => {
    //Check if thoughts is an array and has elements
    if (!Array.isArray(thoughts) || thoughts.length === 0) {
        console.error('Invalid or empty thoughts array:', thoughts);
        return null;
        }

       
        
        return (
            <div className="ThoughtsList">
                {thoughts.map((thought, index) => (
                    <div className="thought-box" key={`${thought._id}-${index}`}>
                    <SingleThought thought={thought} onLike={onLike}/>
                    </div>
                ))}
            </div>
          );
        };
      

export default ThoughtsList;