import "./Feed.css";
import { EachThought } from "./EachThought";

export const Feed = ({ thoughtsData, onLikeChange }) => {
  // console.log(thoughtsData);
  return (
    <section className="feed-container">
      {thoughtsData.map((eachThought) => {
        return (
          <EachThought
            key={eachThought._id} // Add this key prop
            eachThought={eachThought}
            onLikeChange={onLikeChange} // Make sure this prop is passed
          />
        );
      })}
    </section>
  );
};
