import { useEffect } from "react";
import { NewThought } from "./NewThought";
import { Thoughts } from "./Thoughts";

export const Main = () => {
  useEffect(() => {
    console.log("Main mount")
  });

  return (
    <main>
      <NewThought />
      <Thoughts />
    </main> 
  );
};