import { Header } from "./components/Header/Header";
import { Loading } from "./components/Loading/Loading";
import { Post } from "./components/Post/Post";
import { Feed } from "./components/Feed/Feed";
import { Footer } from "./components/Footer/Footer";

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
