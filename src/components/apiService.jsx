import React, { useState, useEffect } from 'react'
import NewThought from './NewThought';
import SingleThought from './SingleThought';
import ThoughtsList from './ThoughtsList';



const API_URL = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";



export const fetchThoughts = async () => {
  const response = await fetch(API_URL);
  if (response.ok) {
const data = await response.json();
return data;
}
throw new Error('Failed to fetch thoughts from the API');
};
export const postThought = async (newThought) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify( { message: newThought }),
  });
if (response.ok) {
  const createdThought = await response.json();
  return createdThought;
}
throw new Error("Failed to post thought to the API");
};

export const likeThought = async (thoughtId) => {
  const likeURL = `${API_URL}/thoughts/${thoughtId}/like`;
  console.log('Like URL:', likeURL);
  try {
    const response = await fetch(likeURL, {
      method: 'POST',
    });
    console.log('Response:', response);
    if (response.ok) {
      const updatedThought = await response.json();
      return updatedThought;
    } else {
      throw new Error(`Failed to like the thought on the API. Status: ${response.status}`)
    }
    } catch (error) {

    console.error('Error in likeThought:', error);
    throw new Error(`Failed to like the thought on the API:${error.message}`);
  }
};
