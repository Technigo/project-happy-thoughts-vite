import { Header } from "./Components/Header";
import { MessageForm } from "./Components/MessageForm";
import { MessageList } from "./Components/MessageList";

export const App = () => {
  return (
    <>
      <Header />
      <div>
        <MessageForm />
        <MessageList />
      </div>
    </>
  )
};
