import React, { useState, useEffect } from 'react';
import { SingleThought } from "./SingleThought";



    export const ThoughtsList = ({ thoughts, onLike }) => {
        return (
            <div className="ThoughtsList">
                {thoughts.map((thought, index) => (
                    <SingleThought 
                    key={`${thought._id}-${index}`}
                    thought={thought} 
                    onLike={onLike}
                    />
                ))}
            </div>
          );
        };
      

export default ThoughtsList;