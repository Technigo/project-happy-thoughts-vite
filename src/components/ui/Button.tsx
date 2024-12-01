import "./Button.css";

type ButtonProps = {
  className?: string;
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({
  className = "",
  type = "button",
  children,
}) => {
  return (
    <button
      className={"button " + className}
      type={type}
    >
      {children}
    </button>
  );
};
