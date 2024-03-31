import { formatDistance } from "date-fns";


export const ThoughtList = ({
  loadingThoughts,
  thoughtList,
  setThoughtList,
}) => {
  const onThoughtCheckChange = (thought) => {
    if (loadingThoughts) {
      return <h1>Loading in progress...</h1>;
    }

    const updatedThought = { ...newThought, isChecked: !newThought.isChecked };

    fetch(
      `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thought._id}/check`,
      {
        method: "POST",
        headers: { updatedThought, "Content-Type": "application/json" },
        body: JSON.stringify({
          isChecked: updatedThought.isChecked,
        }),
      }
    )
      .then((response) => response.json())
      .catch((error) => {
        console.log(error);
      });

    //SEE IF THIS IS NEEDED AFTER ADDING LIKE BUTTON

    setThoughtList((thoughtList) =>
      thoughtList.map((singleThought) =>

        singleThought._id === thought._id ? updatedThought : singleThought
      )
    );
  };
  return (
    <section id="thoughts">
      {
        thoughtList.map((newThought) => (
          <div key={thought._id} id="thought">

            <input
              onChange={() => onThoughtCheckChange(newThought)}
              type="checkbox"
              checked={newThought.isChecked}
            />
            <h4>{newThought.description}</h4>
            <p>
              {formatDistance(new Date(newThought.date), new Date(), {
                addSuffix: true,
              })}
            </p>
          </div>
        ))

        //IS tHE REVERSE.method NEEDED? its for reversing order of appearance of posts, from new to old
        // .reverse()
        //This one will show the first 10 posts:
        //.slice(0, 10)
      }
    </section>
  );
};

