import { useState, useEffect, useContext } from "react";
import { getTodos } from "../api";
import { ToDoContext } from "../Providers/ToDoProvider";

// Helps in getting the todo context
export const useTodo = () => {
  return useContext(ToDoContext);
};

// provides the todo context
export const useToDoProvider = () => {
  const [todos, setToDos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchToDos = async () => {
      const response = await getTodos();
      const data = response.data.filter((todo) => todo.userId === 1);
      setToDos(data);
      console.log(todos);
      setLoading(false);
    };
    fetchToDos();
  }, []);

  const addTodoToState = (newTodo) => {
    const newTodos = [newTodo, ...todos];

    setToDos(newTodos);
  };

  const deleteTodoState = (todoid) => {
    const newdata = todos.filter((todo) => todo.id !== todoid);

    setToDos(newdata);
  };

  const updateTodoState = (newTodos)=>{
    setToDos(newTodos)
  }

  return {
    data: todos,
    loading,
    addTodoToState,
    deleteTodoState,
    updateTodoState
  };
};
