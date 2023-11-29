import { useState, useEffect } from "react";
import { UpdateHearts } from "./UpdateHearts";
import { TimeandDate } from "./TimeandDate";

export const RecentThoughts = () => {
  const [recentThoughts, setRecentThoughts] = useState([]);

  //OLD API FOR WEEK 7 LINKED TO TECHNIGO
  // const thoughtsAPI = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

  //NEW API I CREATED IN WEEK 14 WITH MONGO
  const thoughtsAPI =
    "https://project-happy-thoughts-api-n0pa.onrender.com/thoughts";

  //---Initial useEffect hook to run on first mount
  useEffect(() => {
    fetchHappyThoughts();
  }, []);

  //---- function to call the UpdateHeart function ----//

  //----------- function to -------------//
  const fetchHappyThoughts = () => {
    fetch(thoughtsAPI)
      .then((response) => response.json())
      .then((data) => {
        setRecentThoughts(data);
      })
      .catch((error) => {
        console.error("Failed to fetch info", error);
      });

    console.log(recentThoughts);
  };

  return (
    <div>
      <ul>
        {recentThoughts.map((recentThought) => (
          <li className="one-thought-box" key={recentThought._id}>
            {recentThought.message}
            <div>
              <p>
                <UpdateHearts
                  heartID={recentThought._id}
                  heartCount={recentThought.hearts}
                />
                <TimeandDate time={recentThought.createdAt} />
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
