import ThoughtsForm from "./ThoughtsForm.jsx";
import ThoughtsList from "./ThoughtsList.jsx";

export const HappyThoughts = () => {
  // useStates for thoughts list, new thoughts and loading

  // fetch Thoughts
  const url = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

  const fetchThoughts = () => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      });
  };
  fetchThoughts();
  // POST new thought

  // fetch updated list with new thought included

  // useEffect : fetch thoughts

  return (
    <div className="wrapper">
      <ThoughtsForm />
      <ThoughtsList />
    </div>
  );
};
