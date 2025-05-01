import {v4 as uuidv4} from "uuid";
import React, {useState, createContext, useContext} from 'react';

import {useProjectsContext} from "./projectContext"
import { useTaskLocalStorage } from '../hooks/localStorage';

const TodoContext = createContext();

export function TodoProvider({children}){
    const {currentProject} = useProjectsContext(); //get current project form project context
    const [todos, setTodos] = useTaskLocalStorage("todos", []);

    const addTodo = (name, description, dueDate, priority) =>{
        const newTodo = {
            id: uuidv4(),
            name,
            description,
            dueDate,
            priority,
            projectId: currentProject
        }
        setTodos([...todos, newTodo]);
    }

    const updateTodos = (updatedTodo)=>{
        setTodos((prevTodos) =>
        prevTodos.map((todo) => {
            return todo.id === updatedTodo.id? updatedTodo : todo
        }))
    }

    const deleteTodo = (todoId) =>{
        const newTodos = todos.filter(todo => todo.id!== todoId);
        setTodos(newTodos);
    }

    return (
        <TodoContext.Provider value={{
            todos,
            setTodos,
            addTodo,
            updateTodos,
            deleteTodo
        }}>
            {children}
        </TodoContext.Provider>
    )
}


export const useTodoContext = () => useContext(TodoContext);
