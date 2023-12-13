import "./Button.css";

export type ButtonProps = {
  onClick: () => void;
};

export const Button = (props: ButtonProps) => {
  return (
    <button onClick={props.onClick} className="button">
      Click
    </button>
  );
};
