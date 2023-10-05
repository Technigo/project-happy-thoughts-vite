import { UserInput } from "./Components/UserInput";
import { Header } from "./Components/Header";
import { ThoughtList } from "./Components/ThoughtList";

export const App = () => {
  return (
    <div>
      <Header />
      <UserInput />
      <ThoughtList />
    </div>
  );
};

export default App;
