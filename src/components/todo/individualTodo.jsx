
import React, { useState } from "react";
import { useTodoContext } from "../../context/todoContext";
import { TodoEditor } from "./editTodo";

export const IndividualTodo = ({ todo }) => {
  const { deleteTodo } = useTodoContext();
  const [completed, setCompleted] = useState(false);
  const [isediting, setIsEditing] = useState(false);
  const [updatedTodo, setUpdatedTodo] = useState(todo);

  return (
    <div
      className="todo-container h-auto"
    >
      <div className={`todo ${
        completed ? "completed-todo" : "pending-todo"
      }`}>
      <div className="todo-top-wrapper flex justify-between items-center">
        <div className="group-tc flex items-center">
        <input
          type="checkbox"
          className="mark-complete"
          value={completed}
          onChange={() => setCompleted((c) => !c)}
        />
            <div className="todo-title">{todo.name}</div>
            </div>
            <span className="group-ped flex items-center">
              <span className={`priority-icon-${todo.priority}`}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#555454"><path d="M252-146v-602h266l16 80h214v296H562l-16-80H280v306h-28Zm248-414Zm86 160h134v-240H510l-16-80H280v240h290l16 80Z"/></svg>
              </span>
              <div
                className="edit-todo"
                onClick={() => setIsEditing(!isediting)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="21px" viewBox="0 -960 960 960" width="21px" fill="#555454"><path d="M80 0v-56h800V0H80Zm160-277h39l364-364-19-20-20-19-364 364v39Zm-28 28v-79l449-449q5-5 10.5-7t10.92-2q5.42 0 10.5 2t10.08 7l37 37q5 5 7 10.16 2 5.17 2 10.68 0 5.16-2.15 10.82T740-698L291-249h-79Zm509-470-39-39 39 39Zm-78 78-19-20-20-19 39 39Z"/></svg>
              </div>
              <div className="delete-todo" onClick={() => deleteTodo(todo.id)}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#555454"><path d="M312-172q-25 0-42.5-17.5T252-232v-488h-40v-28h148v-28h240v28h148v28h-40v488q0 26-17 43t-43 17H312Zm368-548H280v488q0 14 9 23t23 9h336q12 0 22-10t10-22v-488ZM402-280h28v-360h-28v360Zm128 0h28v-360h-28v360ZM280-720v520-520Z"/></svg>
              </div>
            </span>
          </div>
          <div className="group-dd">
          <div className="todo-description text-8">{todo.description}</div>
          <span className="due-date">
            {todo.dueDate ? new Date(todo.dueDate).toLocaleDateString() : ""}
          </span>
          </div>
        </div>
        <TodoEditor
          todo={todo}
          setUpdatedTodo={setUpdatedTodo}
          updatedTodo={updatedTodo}
          isediting={isediting}
          setIsEditing={setIsEditing}
        />
    </div>
  );
};
