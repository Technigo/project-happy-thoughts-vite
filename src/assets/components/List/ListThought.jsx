import "./ListThought.scss";

/*
List the 20 latest posts from the API below (newest first)
Implement a “like button” on existing posts + display current “likes”
show a loading message or spinner of some sort on the page


Listing the thoughts which are already in the API


(Decision needed): Handle loading states. 
See hint below 👇 When you initially fetch the list of recent 
thoughts, it might take a little time to get the response back 
from the API. During this time, you could show a loading message 
or spinner of some sort on the page. Use something like const 
[loading, setLoading] = useState(true) to make it so the page 
is loading by default, then call setLoading(false) once you get
the response back from the API. With the new thought form and the 
heart button, you could choose to also show a loading state, or 
you could opt to do an optimistic update which means you update 
the UI before the API request has succeeded (making the assumption 
that it will be successful).
*/

export const ListThought = () => {
  //   const [loading, setLoading] = useState(true);

  return <div className="list-wrapper">Make a list of 20 latest posts</div>;
};
