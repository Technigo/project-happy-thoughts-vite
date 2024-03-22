import { HeartDisplay } from "../heart-display/HeartDisplay";
import { PostTime } from "../post-time/PostTime";
import { useState, useEffect } from "react";

export const PostSection = ({ postData, handleUpdate }) => {
  const [sharedHeartsCount, setSharedHeartsCount] = useState(0);
  console.log(localStorage.getItem("shared-heart-count"));
  useEffect(() => {
    const count = parseInt(
      localStorage.getItem("shared-heart-count") || "0",
      10
    );
    setSharedHeartsCount(count);
  }, []);

  return (
    <section className="post-section">
      <p className="hearts-count">
        You&#39;ve shared {sharedHeartsCount} hearts
      </p>
      {postData.map((post) => (
        <div className="each-post" key={post._id}>
          <p className="post-text">{post.message}</p>
          <div className="post-info">
            <HeartDisplay
              handleUpdate={handleUpdate}
              post={post}
              setSharedHeartsCount={setSharedHeartsCount}
            />
            <PostTime post={post} />
          </div>
        </div>
      ))}
    </section>
  );
};
