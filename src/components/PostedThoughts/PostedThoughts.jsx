// Import the SingleMessage component and the CSS file for this component.
import { SingleMessage } from "../SingleMessage/SingleMessage.jsx";
import "./PostedThoughts.css";

// Define the PostedThoughts component as a functional component that takes props.
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
          /* Unique key for each SingleMessage component */
          key={singleMessage._id}
          /* Data for the SingleMessage component */
          singleMessage={singleMessage}
          /* Array of posted thoughts */
          postedThoughts={postedThoughts}
          /* Function to set the posted thoughts */
          setPostedThoughts={setPostedThoughts}
          /* Function to fetch posts */
          fetchPosts={fetchPosts}
        />
      ))}
    </div>
  );
};
