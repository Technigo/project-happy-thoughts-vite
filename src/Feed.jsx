import { useState } from "react";
import { Post } from "./Post";
import { useEffect } from "react";

export const Feed = (props) => {

  // props is an object that contains all the properties that were passed to the component

  return (
    <div className="feed">
      {props.posts.map((post) => (
        // here we are rendering the Post component
        <Post
          key={post._id}
          id={post._id}
          message={post.message}
          hearts={post.hearts}
          createdAt={post.createdAt}
        />
      ))}
    </div>
  );
};
