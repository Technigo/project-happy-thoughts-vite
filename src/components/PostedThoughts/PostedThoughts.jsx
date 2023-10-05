import { SingleMessage } from "../SingleMessage/SingleMessage.jsx";
import "./PostedThoughts.css";

export const PostedThoughts = ({ fetchPosts, postedThoughts }) => {
  return (
    <div>
      {/* Map through the list of posted thoughts and render each thought using the SingleMessage component */}
      {postedThoughts.map((singleMessage) => (
        <SingleMessage
          key={singleMessage._id}
          singleMessage={singleMessage}
          fetchPosts={fetchPosts}
        />
      ))}
    </div>
  );
};
