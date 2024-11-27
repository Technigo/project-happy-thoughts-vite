/* eslint-disable react/prop-types */

/**
 * This component is used to show the user a loading message when the wall is fetching new posts from an API. The loader contains an animation of three dots, and a plain text saying "Loading".  
 */

const Loader = () => (
    <div className="loader-container">
      <span>Loading</span>
      <div className="loader"></div>
    </div>
  );
  
  export default Loader;
  