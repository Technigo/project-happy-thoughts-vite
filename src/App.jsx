import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Message } from "./components/Message";
import { NewPost } from "./components/NewPost";



export const App = () => {
  return (
    <>
      <Header />
      <NewPost />
      <Message />
      <Footer />
    </>
  )
    
};
