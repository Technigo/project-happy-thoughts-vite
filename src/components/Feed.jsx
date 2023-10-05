import "./Feed.css";
import { EachThought } from "./EachThought";

export const Feed = ({ thoughtsData, onLikeChange }) => {
  return (
    <section className="feed-container">
      {thoughtsData.map((eachThought) => (
        <EachThought
          key={eachThought._id}
          eachThought={eachThought}
          onLikeChange={onLikeChange} // Make sure this prop is passed
        />
      ))}
    </section>
  );
};
