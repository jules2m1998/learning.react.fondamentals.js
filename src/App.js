import { useState, useMemo, useRef, useReducer } from "react";
import UserForm from "./components/userform/UserForm";
import Modal from "./components/Modal/Modal";
import UserList from "./components/UserList";
import Button from "./components/UI/button/Button";
import userReducer from "./reducers/userReducer";

function App() {
  const [msg, setMsg] = useState(null);
  // const [users, setUsers] = useState([]);
  const form = useRef(null);
  const [users, dispatch] = useReducer(userReducer, []);

  const isVisible = useMemo(() => {
    return msg;
  }, [msg]);

  const handleSubmit = (data) => {
    const count = Object.keys(data).length > 0;
    const ageLower = data?.age <= 0;
    const nameRequired = data.name?.trim().length > 1;
    const isValid = !(!count || ageLower || !nameRequired);

    if (!count) {
      setMsg((x) => {
        const messages = [x, "Soumet quelque chose"];
        return messages.filter((x) => x != null).join(" and ");
      });
    }

    if (ageLower) {
      setMsg((x) => {
        const messages = [x, "Age must be higher than 0"];
        return messages.filter((x) => x != null).join(" and ");
      });
    }

    if (!nameRequired) {
      setMsg((x) => {
        const messages = [x, "The name is required"];
        return messages.filter((x) => x != null).join(" and ");
      });
    }

    if (isValid) {
      dispatch({
        type: "ADD",
        data: { ...data, id: Math.round(Math.random() * 100) },
      });
      form.current?.reset();
    }
  };
  const closeModal = () => {
    setMsg(null);
  };

  const handleActivateItem = (id) => {
    dispatch({ type: "TOGGLE_ONE", id });
  };

  const handleActivateAll = () => {
    dispatch({ type: "TOGGLE_ALL" });
  };

  return (
    <div>
      <UserForm onSubmit={handleSubmit} ref={form} />
      <UserList users={users} onActivateItem={handleActivateItem} />
      <Modal visible={isVisible} onClick={closeModal} message={msg} />
      {users.length && (
        <Button type="button" onClick={handleActivateAll}>
          Active all
        </Button>
      )}
    </div>
  );
}

export default App;
