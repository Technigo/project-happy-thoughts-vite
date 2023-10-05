import { SingleMessage } from "../SingleMessage/SingleMessage.jsx";
import "./PostedThoughts.css";

export const PostedThoughts = ({ fetchPosts, postedThoughts }) => {
  // State variable to store the list of posted thoughts retrieved from the API

  // useEffect is used to fetch the list of thoughts from the API when the component mounts

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
