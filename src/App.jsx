// import {PostForm} from "./component/postForm/PostForm";
import { GetThought } from "./component/getThought/GetThought";
import { Header } from "./component/header/header";
import { Footer } from "./component/footer/Footer";

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
