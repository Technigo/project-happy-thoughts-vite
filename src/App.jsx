import { Header } from "./Header";
import { ListThought } from "./assets/components/List/ListThought";
import { PostThought } from "./assets/components/Post/PostThought";

export const App = () => {
  return (
    <div className="main-wrapper">
      <Header />
      <PostThought />
      <ListThought />
    </div>
  );
};
