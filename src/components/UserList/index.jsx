import { useContext } from "react";
import styles from "./style.module.css";
import { CounterContext } from "../../contexts";

const Li = ({ user, children, onClick = (id) => null, ...other }) => {
  var handleClick = () => {
    onClick(user.id);
  };
  return (
    <li key={user.id} {...other} onClick={handleClick}>
      {user.name} : {user.age}
    </li>
  );
};

export default function UserList({ users, onActivateItem = (id) => null }) {
  const [counter] = useContext(CounterContext);
  const handleActivateItem = (id) => {
    onActivateItem(id);
  };
  return (
    <div className={styles["user-list"]}>
      {!!users.length && (
        <ul>
          {users.map((u) => (
            <Li
              user={u}
              className={u.isActive ? styles.active : ""}
              onClick={handleActivateItem}
              key={u.id}
            />
          ))}
        </ul>
      )}
      {!users.length && <p>empty list !</p>}
      {counter}
    </div>
  );
}
