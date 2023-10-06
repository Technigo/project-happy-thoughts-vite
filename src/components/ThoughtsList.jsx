import React, { useState, useEffect } from 'react';
import { SingleThought } from "./SingleThought";



    export const ThoughtsList = ({ thought, onLike }) => {
        return (
            <div className="ThoughtsList">
                {thoughts.map((thought) => (
                    <SingleThought 
                    key={thought._id} 
                    thought={thought} 
                    onLike={onLike}
                    />
                ))}
            </div>
          );
        };
      

export default ThoughtsList;