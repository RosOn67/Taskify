import { IndividualTodo } from "./individualTodo";
import { useTodos } from "../../hooks/useTodos";
import { AddTodo } from "./addTodo";
//display list of todos
export const TodoList = ()=>{
    const todolist= useTodos();

    return (
        <div className = "todo-list-container list-none">
            {todolist.map((todo)=> (
                <li key = {todo.id}
                className="todo-list-item">
                    < IndividualTodo todo = {todo} />
                </li>
            ))}
            < AddTodo />
        </div>
    )
}
