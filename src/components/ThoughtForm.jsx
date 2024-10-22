import { useState } from "react";

const API_URL = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

const ThougthForm = () => {
  const [newThought, setNewThought] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type!: "application/json" 
      },
      body: JSON,stringify({ message: newThought })
    })
      .then(response => response.json())
      .then(data => {
        console.log("Posted:", data);
        setNewThought("");
      })
      .catch(error => console.error("Error posting thought:" error));
  };
};