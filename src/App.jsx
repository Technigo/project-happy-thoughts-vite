import { Header } from "./components/Header";
import { Feed } from "./components/Feed";

export const App = () => {
  return (
    <div className="main-wrapper">
      <Header />
      <Feed />
    </div>
  );
};
