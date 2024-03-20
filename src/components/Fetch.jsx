import { useState, useEffect } from "react";

export const Fetch = ({ message, hearts }) => {
  const [getThought, setGetThought] = useState("");
  const [loadingThoughts, setLoadingThoughts] = useState(true);

  const url = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

  const fetchMessages = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data) {
        setGetThought(data.thoughts);
      }
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoadingThoughts(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchMessages();
    }, 1000);
  }, []);

  return (
    <div className="thoughtContainer">
      <div>{getThought}</div>
      {message.map(({message, hearts}) => (
        //console.log()
      ))}
      <div className="loadingThoughts">
        {loadingThoughts ? "Loading thoughts..." : getThought}
     </div>
      Fetch thoughts
    </div>
  );
};
