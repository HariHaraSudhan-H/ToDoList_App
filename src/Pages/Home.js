import React, { useState } from "react";
import CreateToDo from "../Component/CreateToDo";
import Todo from "../Component/Todo";
import { useTodo } from "../hooks";
import styles from "../Styles/home.module.css";

const Home = () => {
  const [editMode, setEditMode] = useState(false);
  const todos = useTodo();
  console.log(todos);

  const handleEdit = (edit) => {
    setEditMode(edit);
  };
  return (
    <div>
      <CreateToDo />
      {todos.loading ? (
        "loading"
      ) : (
        <ul className={styles.todolist}>
          {todos.data.map((todo) => {
            return (
              <li key={todo.id}>
                <Todo
                  data={todo}
                  handleEdit={handleEdit}
                  editModeOther={editMode}
                  setEditModeOther={setEditMode}
                />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Home;
