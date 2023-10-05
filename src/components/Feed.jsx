import { useEffect } from "react";
import "./Feed.css";
import { EachThought } from "./EachThought";

export const Feed = ({ thoughtsData, fetchData }) => {
  console.log("Data from API", thoughtsData);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="feed-container">
      {thoughtsData.map((eachThought) => (
        <EachThought key={eachThought._id} eachThought={eachThought} />
      ))}
    </section>
  );
};
