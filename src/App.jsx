import Header from "./components/header/Header";
import DisplayFeed from "./components/displayFeed/DisplayFeed";

export const App = () => {
  return (
    <div>
      <Header title="Happy Thoughts" />
      <DisplayFeed />
    </div>
  );
};

export default App;
