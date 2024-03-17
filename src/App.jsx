import { Header } from "./components/Header";
import { Loading } from "./components/Loading";
import { Post } from "./components/Post";
import { Feed } from "./components/Feed";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <section>
      <Header />
      <Loading />
      <Post />
      <Feed />
      <Footer />
    </section>
  );
};
