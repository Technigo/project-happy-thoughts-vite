import { useEffect } from "react";
import "./RecentThoughts.css";

export const RecentThoughts = ({ items, setItems }) => {
  useEffect(() => {
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
      .then((response) => response.json())
      .then((json) => setItems(json))
      .catch((error) => console.error(error));
  });

  return (
    <div className="post-container">
      <div>
        {items.map((item) => {
          return (
            <pre className="post-box" key={item}>
              {item.message}
            </pre>
          );
        })}
      </div>
    </div>
  );
};
