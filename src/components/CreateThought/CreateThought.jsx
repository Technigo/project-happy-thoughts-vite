import { useEffect } from "react";

export const CreateThought = ({ items, setItems }) => {
  useEffect(() => {
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts", {
      method: "POST",
    })
      .then((response) => response.json())
      .then((json) => setItems(json));
  });

  return (
    <div>
      Hi
      {items}
    </div>
  );
};
