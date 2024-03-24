import { HeartDisplay } from "../heart-display/HeartDisplay";
import { PostTime } from "../post-time/PostTime";
import { useState } from "react";

export const PostSection = ({ postData, handleUpdate }) => {
  const [totalHeartCount, setTotalHeartCount] = useState(
    localStorage.getItem("shared-heart-count")
      ? parseInt(localStorage.getItem("shared-heart-count"), 10)
      : "0"
  );

  const handlePlusHeartCount = () => {
    console.log("dependency rendered");
    const plusHeartCount = localStorage.getItem("shared-heart-count")
      ? parseInt(localStorage.getItem("shared-heart-count"), 10) + 1
      : "1";
    localStorage.setItem("shared-heart-count", plusHeartCount);
    setTotalHeartCount(plusHeartCount);
  };

  return (
    <section className="post-section">
      <p className="hearts-count">You&#39;ve shared {totalHeartCount} hearts</p>
      {postData.map((post) => (
        <div className="each-post" key={post._id}>
          <p className="post-text">{post.message}</p>
          <div className="post-info">
            <HeartDisplay
              handleUpdate={handleUpdate}
              post={post}
              handlePlusHeartCount={handlePlusHeartCount}
            />
            <PostTime post={post} />
          </div>
        </div>
      ))}
    </section>
  );
};
