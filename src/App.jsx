import { MessageHandlingContainer } from "./components/MessageHandlingContainer";
import { Header } from "./components/Header";


export const App = () => {
  return (
    <div className="main-wrapper">
      <Header />
      <MessageHandlingContainer />
      </div>  
  );
};
