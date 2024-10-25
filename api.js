// This function fetches a list of thoughts (messages) from the API.
export const fetchThoughts = async () => {
  // Makes a GET request to the "happy-thoughts" API to retrieve all thoughts.
  const res = await fetch(
    "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts"
  );
  // if the request was not successful, throw an error
  if (!res.ok) {
    throw new Error("Failed to fetch thoughts");
  }

  // Converts the response (which is in JSON format) into a JavaScript object
  const data = await res.json();

  // Sort the fetched thoughts by their creation date, so the most recent ones come first.
  return data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
};

// This function posts a new message (thought) to the API
export const postThought = async (newMessage) => {
  // Makes a POST request to the API to create a new thought
  // "newMessage" is the user's text/thought
  const res = await fetch(
    "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts",
    {
      method: "POST", // POST method is used to send new data to the server
      headers: {
        "Content-Type": "application/json", // Tells the server we're sending JSON data
      },
      body: JSON.stringify({ message: newMessage }), // The new thought content, converted to JSON format
    }
  );
  if (!res.ok) {
    throw new Error("Failed to post thought");
  }
  return await res.json();
};

// This function sends a "like" (heart) for a specific thought by its ID
export const likeThought = async (thoughtId) => {
  const res = await fetch(
    `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thoughtId}/like`,
    {
      method: "POST", // POST method is used because we're updating the server by adding a like
    }
  );
  if (!res.ok) {
    throw new Error("Failed to like thought");
  }
  return await res.json();
};
