import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Message } from "./components/Message";
import { NewPost } from "./components/NewPost";
import "./index.css";



export const App = () => {
  return (
    <>
      <div className="main-wrapper">
        <Header />
        <NewPost />
        <Message />
        <Footer />
      </div>
    </>
  )
    
};
