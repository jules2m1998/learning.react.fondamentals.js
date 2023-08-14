import { useState, useMemo, useRef } from "react";
import UserForm from "./components/userform/UserForm";
import { createPortal } from "react-dom";
import Modal from "./components/Modal/Modal";
import UserList from "./components/UserList";

function App() {
  const [msg, setMsg] = useState(null);
  const [users, setUsers] = useState([]);
  const form = useRef(null);

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
      setUsers((x) => [...x, data]);
      form.current?.reset();
    }
  };
  const closeModal = () => {
    setMsg(null);
  };
  const modal = createPortal(
    <Modal visible={isVisible} onClick={closeModal} message={msg} />,
    document.body
  );
  return (
    <div>
      <UserForm onSubmit={handleSubmit} ref={form} />
      <UserList users={users} />
      {modal}
    </div>
  );
}

export default App;
