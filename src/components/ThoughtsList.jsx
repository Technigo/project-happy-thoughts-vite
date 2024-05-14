import { formatDistance } from 'date-fns';
import PropTypes from 'prop-types';

export const ThoughtsList = ({ loading, thoughtList, setThoughtList }) => {

  if (loading) {
    // display a loading message while the thoughts are being fetched
    return <h1>Loading thoughts...</h1>
  } else if (thoughtList.length === 0) {
    return <h1>No thoughts available</h1>
  }

  // define the prop types for the ThoughtsList component
  ThoughtsList.propTypes = {
    loading: PropTypes.bool.isRequired,
    thoughtList: PropTypes.array.isRequired,
    setThoughtList: PropTypes.func.isRequired,
  };

  const onThoughtLike = (thoughts) => {
    // create a new object with the updated number of hearts
    const updatedThoughtLike = { ...thoughts, hearts: thoughts.hearts + 1 };
    const API = `https://happy-thoughts-api-ap6c.onrender.com/thoughts/${thoughts._id}/like`;
    const likeThought = {
      method: "POST",
      headers: {
        updatedThoughtLike, "Content-Type": "application/json"
      }, // update the thought with the new number of hearts
      body: JSON.stringify({
        hearts: updatedThoughtLike.hearts
      }),
    };

    // fetch the API with the updated thought
    fetch(API, likeThought)
      .then((response) => response.json())
      .catch((error) => {
        console.error(error);
      });

    // update the thought list with the updated thought
    setThoughtList((thoughtList) =>
      thoughtList.map((thoughts) =>
        thoughts._id === updatedThoughtLike._id ? updatedThoughtLike : thoughts
      )
    );
  };

  return (

    <section className="thoughts shadow">
      {/* map through the thoughtList array and display each thought in a div element */}
      {/* add a button to like the thought and display the number of hearts */}
      {/* add a paragraph element to display the time the thought was created */}
      {
       Object.values(thoughtList)
          .filter((thought) => thought.message && thought.message.length <= 140)
          .map((thought) => (
            <div key={thought._id} className="thought">
              <p>{thought.message}</p>

              <div className="thought-footer">
                <button
                  aria-label="like button"
                  onClick={() => onThoughtLike(thought)}
                  ></button>
                <p className="timestamp">
                  {formatDistance(new Date(thought.createdAt), new Date)} ago
                </p>
              </div>
            </div>
          ))}
    </section>
  );
};