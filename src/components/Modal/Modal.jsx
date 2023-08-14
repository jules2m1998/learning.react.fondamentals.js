import styles from "./Modal.module.css";

export default function Modal({
  visible = false,
  onClick = () => null,
  message = "something went wrong :|",
}) {
  const prevent = (e) => {
    e.stopPropagation();
  };
  return (
    visible && (
      <div className={styles.modal} onClick={onClick}>
        <div className={styles.content}>
          <h1 className={styles.header}>Modal</h1>
          <div className={styles.body} onClick={prevent}>
            <h4>Ooops!</h4>
            <p>{message}</p>
          </div>
        </div>
      </div>
    )
  );
}
