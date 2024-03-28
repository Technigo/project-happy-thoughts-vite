/**
 * Make Get and Post functions
 */

const apiUrl = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

export const makeGetRequest = async () => {
  try {
    const res = await fetch(apiUrl);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Error fetching data", err);
  }
};

export const makePostRequest = async (thought) => {
  try {
    const res = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // Add the body with data to post
      body: JSON.stringify({
        message: thought,
      }),
    });

    if (res.ok) {
      return res.json();
    } else {
      console.log("Failed to post message", res);
    }
  } catch (error) {
    console.error("Error posting message:", error);
    throw error;
  }
};

export const makeLikeRequest = async (id) => {
  try {
    const res = await fetch(apiUrl + `/${id}/like`, {
      method: "POST",
    });

    if (res.ok) {
      return res.json();
    } else {
      console.log("Failed to post message", res);
    }
  } catch (error) {
    console.error("Error posting message:", error);
    throw error;
  }
};
