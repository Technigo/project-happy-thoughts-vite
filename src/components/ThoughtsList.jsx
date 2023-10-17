import React, { useState, useEffect } from 'react';
import { SingleThought } from "./SingleThought";
import '../index.css';



    export const ThoughtsList = ({ thoughts, onLike }) => {
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