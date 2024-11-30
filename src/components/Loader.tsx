/**
 * Loader Component
 * 
 * This component displays a loading indicator while the application fetches new posts from the API.
 * 
 * Features:
 * - A text message: "Loading" to inform users of the current state.
 * - An animated loader with three dots to visually indicate loading.
 * 
 * Usage:
 * - This component is typically displayed while the `HappyWall` component is fetching data.
 * - The loader is styled using the `loader` and `loader-container` CSS classes.
 */

const Loader = () => (
    <div className="loader-container">
      <span>Loading</span>
      <div className="loader"></div>
    </div>
  );
  
  export default Loader;
  