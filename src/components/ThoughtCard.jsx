// ThoughtCard.jsx 

export const ThoughtCard = ({ thought }) => {
  return ( 
    <div className="thought-card">
      <p>{thought.message}</p>
      <div className="thought-footer">
        {/* Like button component with thought ID and initial like count */}
        <LikeButton thoughtId={thought._id} initialHearts={thought.hearts} />
        {/* Timestamp showing when thought was created */}
        <CreatedAt createdAt={thought.createdAt} /> 
      </div>
    </div> 
  );
};