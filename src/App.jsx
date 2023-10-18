import { useState } from "react";
import { Header } from "./Header/Header";
import { Comments } from "./Comments/Comments";

export const App = () => {
  const [Comments, setComments] = useState([]);

  const newCommentInput = (newComment) => {
    setComments([newComment, ...Comments]);
  };

  const handleLike = (thoughtId) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [thoughtId]: (prevLikes[thoughtId] || 0) + 1,
    }));
  };

  return (
    <div>
      <Header />
      <Comments thoughts={thoughts} updateLike={handleLike} />
    </div>
  );
};

export default App;
