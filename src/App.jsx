import { Header } from "./Header";
import { ListMessage } from "./assets/components/ListMessage";
import { PostMessage } from "./assets/components/PostMessage";

export const App = () => {
  return (
    <div className="main-wrapper">
      <Header />
      <PostMessage />
      <ListMessage />
    </div>
  );
};
