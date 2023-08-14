import styles from "./style.module.css";

export default function UserList({ users }) {
  return (
    <div className={styles["user-list"]}>
      {!!users.length && (
        <ul>
          {users.map((u) => (
            <li key={u.name}>
              {u.name} : {u.age}
            </li>
          ))}
        </ul>
      )}
      {!users.length && <p>empty list !</p>}
    </div>
  );
}
