import { useEffect } from "react";
import "./Feed.css";

export const Feed = ({ thoughts }) => {

  return (
    <section className="feed-container">
      {thoughts.map((eachThought) => (
        <div className="posted-thought" key={eachThought._id}>
          <p>{eachThought.message}</p>
          <div className="hearts-time">
            <div className="likes">
                <button className="likes-btn"><span>❤️</span></button>
                <p>x {eachThought.hearts}</p>
            </div>
            <p>{eachThought.createdAt}</p>
          </div>
        </div>
      ))}
    </section>
  );
};
