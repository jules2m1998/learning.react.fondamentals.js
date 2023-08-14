import styles from "./UserForm.module.css";
import FormInput from "../UI/form-input/FormInput";
import Button from "../UI/button/Button";
import { forwardRef, useContext, useImperativeHandle, useRef } from "react";
import { CounterContext } from "../../contexts";

const UserForm = forwardRef(({ onSubmit = () => null }, ref) => {
  const formRef = useRef(null);
  const [counter, setCounter] = useContext(CounterContext);
  useImperativeHandle(ref, () => ({
    reset() {
      return formRef.current.reset();
    },
  }));
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Array.from(formData.entries()).reduce((acc, [key, value]) => {
      acc = { ...acc, [key]: key === "age" ? +value : value };
      return acc;
    }, {});
    onSubmit(data);
  };
  return (
    <form ref={formRef} className={styles.form} onSubmit={handleSubmit}>
      <FormInput name="name" type="text" label={"Name"} />
      <FormInput name="age" type="number" label={"Age"} />
      <Button>Save {counter}</Button>
      <Button type="button" onClick={(_) => setCounter((x) => x + 1)}>
        Increment {counter}
      </Button>
    </form>
  );
});

export default UserForm;
