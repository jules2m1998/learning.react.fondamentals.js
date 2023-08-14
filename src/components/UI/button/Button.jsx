import ButtonStyle from "./Button.module.css";

export default function Button({
  children,
  type = "submit",
  onClick = () => {},
}) {
  return (
    <button className={ButtonStyle.button} onClick={onClick} type={type}>
      {children}
    </button>
  );
}
