import { createContext } from "react";
import { useToDoProvider } from "../hooks";

const initialState = {
    data: [],
    loading: true,
    addTodoToState : ()=>{},
    deleteTodoState : ()=>{},
    updateTodoState : ()=>{}
}

export const ToDoContext = createContext(initialState);

export const ToDoProvider = ({children})=>{
    const todos = useToDoProvider();

    return <ToDoContext.Provider value={todos}>{children}</ToDoContext.Provider>
}