import { useState, useEffect } from "react";

export const PostMessage = ({ newMessage, fetchPosts }) => {
  const [newPost, setNewPost] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (newPost.length >= 141) {
      setErrorMessage("Oh no, your message is too long!");
    } else {
      setErrorMessage("");
    }
  }, [newPost]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (newPost.length <= 4) {
      setErrorMessage(
        "Write some more, your message is too short. At least 5 letters!"
      );
    } else {
      try {
        const options = {
          method: "POST",
          body: JSON.stringify({
            message: newPost,
          }),
          headers: { "Content-Type": "application/json" },
        };

        const response = await fetch(
          "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts",
          options
        );

        if (response.ok) {
          const data = await response.json();
          // Update the local state with the new thought
          newMessage(data);
          // Clear the input field
          setNewPost("");
          // Refresh the message list by calling fetchPosts
          fetchPosts();
        } else {
          // Handle errors if the POST request fails
          console.error("Failed to add a new thought");
        }
      } catch (error) {
        // Handle network or other errors
        console.error("Error occurred while adding a new thought", error);
      }
    }
  };

  return (
    <div className="post-wrapper">
      <h2>Post your message</h2>
      <form onSubmit={handleFormSubmit}>
        <textarea
          rows="5"
          cols="50"
          placeholder="Collect your happy thoughts here"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
        <div>
          <p className="error">{errorMessage}</p>
          <p className={`length ${newPost.length >= 140 ? "red" : ""}`}>
            {newPost.length}/140
          </p>
        </div>
        <button type="submit" id="submitPostBtn">
          Send
        </button>
      </form>
    </div>
  );
};

// import { useState, useEffect } from "react";

// export const PostMessage = ({ newMessage, fetchPosts }) => {
//   const [newPost, setNewPost] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   useEffect(() => {
//     if (newPost.length >= 141) {
//       setErrorMessage("Oh no, your message is too long!");
//     } else {
//       setErrorMessage("");
//     }
//   }, [newPost]);

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     console.log("newPost onformsubmit:", newPost);

//     if (newPost.length <= 4) {
//       setErrorMessage(
//         "Write some more, your message is too short. Atleast 5 letters!"
//       );
//     } else {
//       const options = {
//         method: "POST",
//         body: JSON.stringify({
//           message: `${newPost}`,
//         }),
//         headers: { "Content-Type": "application/json" },
//       };

//       await fetch(
//         "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts",
//         options
//       )
//         .then((response) => response.json())
//         .then((data) => {
//           newMessage(data);
//           setNewPost("");
//           fetchPosts();
//         })
//         .catch((error) => console.log(error));
//     }
//   };

//   return (
//     <div>
//       <h2>Post your message</h2>
//       {/*form element to use handleFormSubmit with onSubmit event handler*/}
//       <form onSubmit={handleFormSubmit}>
//         <textarea
//           rows="5"
//           cols="50"
//           placeholder="Collect your happy thoughts here"
//           value={newPost}
//           onChange={(e) => setNewPost(e.target.value)}
//         />
//         <div>
//           {/*displays error message*/}
//           <p className="error">{errorMessage}</p>
//           <p className={`length ${newPost.length >= 140 ? "red" : ""}`}>
//             {newPost.length}/140
//           </p>
//         </div>
//         <button type="submit" id="submitPostBtn">
//           Send
//         </button>
//       </form>
//     </div>
//   );
// };
