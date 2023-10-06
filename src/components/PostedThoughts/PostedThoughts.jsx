import { SingleMessage } from "../SingleMessage/SingleMessage.jsx";
import "./PostedThoughts.css";

export const PostedThoughts = ({
  fetchPosts,
  postedThoughts,
  setPostedThoughts,
}) => {
  return (
    <div className="posted-thoughts">
      {/* Map through the list of posted thoughts and render each thought using the SingleMessage component */}
      {postedThoughts.map((singleMessage) => (
        <SingleMessage
          key={singleMessage._id}
          singleMessage={singleMessage}
          postedThoughts={postedThoughts}
          setPostedThpughts={setPostedThoughts}
          fetchPosts={fetchPosts}
        />
      ))}
    </div>
  );
};
