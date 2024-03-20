// RecentThoughts Component
export const RecentThoughts = ({ thoughts }) => {
  //Function to render thoughts
  const renderRecentThoughts = () => {
    return thoughts.map((thought) => (
      <div key={thought._id} className="thought">
        <li>{thought.message}</li>
      </div>
    ));
  };
  return (
    <div className="recent-thoughts">
      <h1>Happy Thoughts</h1>
      <ul>{renderRecentThoughts()}</ul>
    </div>
  );
};
