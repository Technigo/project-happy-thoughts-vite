import "./loading.css";

// eslint-disable-next-line react/prop-types
export const Loading = ({ loading }) => {
  console.log("Loading state:", loading); //log the received loading prop
  return (
    loading && (
      <section className="loading-container">
        <p>❤️Loading. Think of something nice while we load the thoughts.❤️ </p>
      </section>
    )
  );
};

// export const Loading = () => {
//   return (
//     <section className="loadingContainer">
//       <p>Loading. Think of something nice while you wait. </p>
//     </section>
//   );
// };
