import { URL } from "./ApiUrl";

const addLike = async (postId) => {
  try {
    fetch(`${URL}/${postId}/like`, {method: "POST"})

    //Update the state with a like
    setPosts((prevPosts) =>
    prevPosts.map((post) =>
    post._id === postId ? { ...post, hearts: post.hearts + 1 } : post
    ))
  } catch (error) {
    console.error("Error liking th epost is:", error)
  }
}