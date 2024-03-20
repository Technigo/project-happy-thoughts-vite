import { useEffect, useState } from "react";
import Thought from "./component/Thought";
import ThoughtList from "./component/ThoughtList";
import "./index.css";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [changeHappend, setChangeHappend] = useState(0);

  const fetchThoughts = async () => {
    try {
      const response = await fetch(
        "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts",
        {
          method: "GET",
        }
      );

      const data = await response.json();

      setThoughts(data);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  const onChangeHappend = () => {
    setChangeHappend(changeHappend + 1);
  };

  useEffect(() => {
    fetchThoughts();
  }, [changeHappend]);

  return (
    <div>
      <p className="titel">Project Happy Thoughts</p>
      <Thought createdThought={onChangeHappend} />
      <ThoughtList thoughts={thoughts} setLiked={onChangeHappend} />
    </div>
  );
};
