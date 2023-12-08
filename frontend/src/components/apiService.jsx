import React, { useState, useEffect } from 'react'
import NewThought from './NewThought';
import SingleThought from './SingleThought';
import ThoughtsList from './ThoughtsList';
import '../index.css';



const API_URL = "https://happy-thoughts-api-8tgx.onrender.com/thoughts";

export const fetchThoughts = async () => {
try {
  const response = await fetch(API_URL, {
    method: "GET",
  });

  if (response.ok) {
    const data = await response.json();
    console.log('API response:', data);
    return data;
  } else {
    throw new Error(`Failed to post thought to the API. Endpoint: ${API_URL}, Status: ${response.status}`);
  }
  } catch (error) {
    console.error('Error fetching thoughts:', error);
    throw error;
  }
};


export const postThought = async (newThought) => {
  try {
    console.log('Posting thought:', JSON.stringify({ message: newThought }));
    const response = await fetch(API_URL, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json", 
      },
      body: JSON.stringify({ message: newThought })
    });
  if (response.ok) {
const createdThought = await response.json();
return createdThought;
} else {
  throw new Error(`Failed to post thought to the API. Status: ${response.status}`);
}
} catch (error) {
  console.error("Error posting thought:", error);
    throw error;
}
};


export const likeThought = async ( thought ) => {
try {
  const response = await fetch(`${API_URL}/${thought._id}/like`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({})
  });
  if (response.ok) {
    const updatedThought = await response.json();
    return updatedThought;
  } else {
    throw new Error(`Failed to like the thought on the API. Status: ${response.status}`);
  }
} catch (error) {
    console.error('Error in likeThought:', error);
    throw error;
  }
};
