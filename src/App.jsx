// import {PostForm} from "./component/postForm/PostForm";
import { GetThought } from "./component/GetMessage/GetThought";
import { Header } from "./component/GetMessage/header";
import { Footer } from "./component/Footer";

export const App = () => {
  return (
    <>
      <main>
        <Header />
        <GetThought />
      </main>
      <Footer />
    </>
  )
};
