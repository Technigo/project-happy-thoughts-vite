const BASE_URL = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts"

// fetching data from the API
export const fetchThoughts = async () => {
  const response = await fetch(BASE_URL)
  return response.json()
}

// function to send the message as a JSON-object to the url via POST
export const postThought = async (message) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message })
  })
  return response.ok
}

// function to send a POST request to the server to like a message/thought
export const likeThought = async (thoughtId) => {
  const response = await fetch(`${BASE_URL}/${thoughtId}/like`, { method: "POST" })
  if (!response.ok) throw new Error("Failed to like thought")
}