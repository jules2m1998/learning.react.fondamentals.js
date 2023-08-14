import styles from "./UserForm.module.css";
import FormInput from "../UI/form-input/FormInput";
import Button from "../UI/button/Button";
import { forwardRef, useImperativeHandle, useRef } from "react";

const UserForm = forwardRef(({ onSubmit = () => null }, ref) => {
  const formRef = useRef(null);
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
      <Button>Save</Button>
    </form>
  );
});

export default UserForm;
