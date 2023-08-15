import React, { useState } from "react";
import { useTodo } from "../hooks";
import { addTodo } from "../api";
import styles from "../Styles/home.module.css";

const CreateToDo = () => {
  const [task, setTask] = useState("");
  const todos = useTodo();

  // Handles submission of form
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      completed: false,
      userId: 1,
      title: task,
      id: todos.data.length + 1,
    };
    const addTask = async () => {
      const response = await addTodo(newTodo);
      if (response.success && task.length !== 0) {
        todos.addTodoToState(newTodo);
      } else {
        console.log("Error in adding todo");
      }
    };
    addTask();
    setTask("");
  };

  const handleRemove = (e)=>{
    e.preventDefault();
    const newtodo = todos.data.filter((todo)=>todo.completed!=true);
    todos.updateTodoState(newtodo);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.createtodo}>
        <input
          type="text"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
          className={styles.createtodoInput}
          placeholder="Enter the task..."
        />
        <button type="submit" className={styles.createtodoButton}>
          Add Post
        </button>
        <button className={styles.createtodoButton} onClick={handleRemove} style={{backgroundColor:'red'}}>Remove Ticked</button>
      </form>
    </div>
  );
};

export default CreateToDo;
