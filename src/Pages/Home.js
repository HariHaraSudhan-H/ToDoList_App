import React from "react";
import CreateToDo from "../Component/CreateToDo";
import Todo from "../Component/Todo";
import { useTodo } from "../hooks";
import styles from '../Styles/home.module.css';

const Home = () => {
  const todos = useTodo();
  console.log(todos);
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
                <Todo data={todo} />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Home;
