import ButtonStyle from "./Button.module.css";

export default function Button({ children, ...others }) {
  return (
    <button className={ButtonStyle.button} {...others}>
      {children}
    </button>
  );
}
