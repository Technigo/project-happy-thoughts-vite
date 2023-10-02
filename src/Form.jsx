import { useState, useEffect } from "react";

export const Form = () => {
  const [thoughts, setThoughts] = useState([]);

  useEffect(() => {
    fetch(`GET https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts`)
      .then((response) => response.json())
      .then((thoughts) => setThoughts(thoughts))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return <div>Form</div>;
};
