import { Header } from "./components/Header/Header";
import { Post } from "./components/Post/Post";
import { Feed } from "./components/Feed/Feed";
import { Footer } from "./components/Footer/Footer";

export const App = () => {
  return (
    <section>
      <Header />
      <div className="app-container">
        <Post />
        <Feed />
      </div>
      <Footer />
    </section>
  );
};
