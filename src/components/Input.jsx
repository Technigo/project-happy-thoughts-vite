import { useEffect } from "react";
import "./Input.css";

export const Input = () => {
  //const url = ...

  const handleUserInput = async () => {};

  useEffect(() => {
    handleUserInput();
  }, []);

  return (
    <div>
      <form className="input-box">
        What is making you happy right now?
        <input className="input-field" type="text"></input>
        <button className="button-input" type="submit">
          Send Happy Thought
        </button>
      </form>
    </div>
  );
};
