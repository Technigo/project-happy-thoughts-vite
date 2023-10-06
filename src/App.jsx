import { useState, useEffect } from "react";
import { NewThoughts } from "./HappyThought.jsx/NewThoughts";
import { RecentThoughts } from "./HappyThought.jsx/RecentThoughts";
import { Hearts } from "./HappyThought.jsx/Hearts";

const apiKey = "";

export const App = () => {
  return (
    <div>
      <div className="title">Project Happy thoughts</div>
      <NewThoughts />
      <RecentThoughts />
      <Hearts />
    </div>
  );
};
