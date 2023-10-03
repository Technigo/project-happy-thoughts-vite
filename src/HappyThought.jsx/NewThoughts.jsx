export const NewThoughts = ({ updateThoughts, value }) => {
  return <div>NewThoughts</div>;
};
const NewHappyThoughts = (e) => {
  updateThoughts("", e.target.value);
  return (
    <div className="NewThoughts">
      <input type="text" value={value} onChange={NewThoughts} maxLength={140} />
    </div>
  );
};
