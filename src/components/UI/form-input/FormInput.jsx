import styles from "./forminput.module.css";

const FormInput = ({ name, type = "text", label }) => {
  return (
    <div className={styles.input}>
      <label htmlFor={name}>{label}</label>
      <input type={type} id={name} name={name} />
    </div>
  );
};

export default FormInput;
