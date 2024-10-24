import "./Button.css";

export const Button = ({ className, type, children }) => {
  return (
    <button className={"button " + className} type={type}>
      {children}
    </button>
  );
};
