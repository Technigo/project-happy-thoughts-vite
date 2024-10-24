// This function fetches a list of thoughts (messages) from the API.
export const fetchThoughts = async () => {
  // Makes a GET request to the "happy-thoughts" API to retrieve all thoughts.
  const res = await fetch(
    "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch thoughts");
  }
  const data = await res.json();
  return data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
};

export const postThought = async (newMessage) => {
  const res = await fetch(
    "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: newMessage }),
    }
  );
  if (!res.ok) {
    throw new Error("Failed to post thought");
  }
  return await res.json();
};

export const likeThought = async (thoughtId) => {
  const res = await fetch(
    `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thoughtId}/like`,
    {
      method: "POST",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to like thought");
  }
  return await res.json();
};
