import { Like } from "./Like";


// RecentThoughts Component
export const RecentThoughts = ({ thoughts, apiUrl }) => {
  //Function to render thoughts
  const renderRecentThoughts = () => {
    return thoughts.map((thought) => (
      <div key={thought._id} className="thought">
        <li>{thought.message}</li>
        <p>Likes: {thought.hearts}</p>
        <p>Posted: {formatDate(thought.createdAt)}</p>
        <Like apiUrl={apiUrl} thoughtId={thought._id} />
      </div>
    ));
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };
  return (
    <div className="recent-thoughts">
      <h1>Happy Thoughts</h1>
      <ul>{renderRecentThoughts()}</ul>
    </div>
  );
};
