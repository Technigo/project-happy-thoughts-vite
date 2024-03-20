import { Heading } from "./components/Header&Footer/Heading";
import { Form } from "./components/Form";
import { Footer } from "./components/Header&Footer/Footer";

export const App = () => {
  return(
    <div className="platform">
      <Heading />
      <Form />
      <Footer />
    </div>
  );   
};
