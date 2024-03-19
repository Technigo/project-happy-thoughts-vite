export const HappyThoughts = ({ thought }) => {
  return (
    <div className="Container">
      {thought.map((thought) => (
        <p key={thought.id}>
          {" "}
          {thought.message} {thought.hearts}
        </p>
      ))}
    </div>
  );
};
