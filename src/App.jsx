import React from "react";
import { Message } from "./ShowMessage";
import { MessageInput } from "./MessageInput";

const App = () => {
  return (
    <div className="App">
      <MessageInput />
      <Message />
    </div>
  );
};

export default App;
