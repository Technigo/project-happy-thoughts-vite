import { useState, useEffect } from "react";
import { NewThoughts } from "./HappyThought.jsx/NewThoughts";
import { RecentThoughts } from "./HappyThought.jsx/RecentThoughts";

const apiKey = "";

export const App = () => {
  return (
    <div>
      <div className="title">Project Happy thoughts</div>
      <NewThoughts /> {}
    </div>
  );
};
