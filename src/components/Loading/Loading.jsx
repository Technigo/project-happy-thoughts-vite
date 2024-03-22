import "./loading.css";

// eslint-disable-next-line react/prop-types
export const Loading = ({ loading }) => {
  return (
    loading && (
      <section className="loading-container">
        <p>❤️Loading. Think of something nice while we load the thoughts.❤️ </p>
      </section>
    )
  );
};
