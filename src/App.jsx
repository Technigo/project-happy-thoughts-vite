import { useEffect, useState } from "react";
import { InputSection } from "./component/input-section/InputSection";
import { PostSection } from "./component/post-section/PostSection";

export const App = () => {
  const url = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to load data...");
        }

        const data = await response.json();
        setPostData(data);
      } catch (err) {
        console.error("Error:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <InputSection postData={postData} />
      <PostSection postData={postData} />
    </main>
  );
};
