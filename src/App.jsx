import { useState, useEffect } from "react";
import { Thoughts } from "./components/Thoughts/Thoughts"

export const App = () => {
  const [thoughts, setThoughts] = useState("") 

  useEffect (() => {
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        setThoughts(json)
        console.log(json[0].message)
        console.log("thoughts", {thoughts})
      })
      .catch((error) => {
        console.log("error:", error)
      })
  }, [thoughts]
  )

  const renderThoughts = thoughts.map(
    ({ _id, message, hearts, createdAt }) => (
      <Thoughts
        key={_id}
        message={message}
        likes={hearts}
        time={createdAt}
      />
    )
  );

  return (
    <div className="app-field">
      Find me in src/app.jsx!
      {<div className="thoughts-section">{renderThoughts}</div>}
    </div>
  );
};
