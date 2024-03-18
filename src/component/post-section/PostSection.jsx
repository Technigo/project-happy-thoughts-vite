import { HeartDisplay } from "../heart-display/HeartDisplay";
import { PostTime } from "../post-time/PostTime";

export const PostSection = ({ postData, handleUpdate }) => {
  return (
    <section className="post-section">
      {postData.map((post) => (
        <div
          className="each-post"
          key={post._id}
          style={{ border: "black 1px solid" }}
        >
          <p className="post-text">{post.message}</p>
          <div className="post-info">
            <HeartDisplay handleUpdate={handleUpdate} post={post} />
            <PostTime post={post} />
          </div>
        </div>
      ))}
    </section>
  );
};
