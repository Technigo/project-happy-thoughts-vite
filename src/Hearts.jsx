import { useState } from "react";

export const UpdateLike = (heartID) => {

const [likes, setLikes] = useState(heartID.heartCount);

let thisCount = heartID.heartID;

const addToHeartCount = async () => {

  const heartURL = `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thisCount}/like`;

  try {
  const response = await fetch(heartURL,
    { method: "POST",
  });
  if (response.ok) {setLikes((prevLikes) => prevLikes + 1);
  } else {
  console.error("Error");
  }
  } catch (error) {
  console.error("Failed to fetch info", error);
  };
  };


return (
  <>
  <span>
  <button className="heart" 
  onClick={addToHeartCount}> ❤️
  </button>
  x {likes} 
  </span>
  </>
);
}