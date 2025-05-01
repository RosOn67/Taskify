import Close from "@/assets/icons/close.svg?react";
import DatePicker from "react-datepicker";
import React, { useState, useRef } from "react";
import { useTodoContext } from "../../context/todoContext";
import { PriorityDropdown } from "./priorityDrop";
import "react-datepicker/dist/react-datepicker.css";

export const AddTodo = () => {
  const { addTodo } = useTodoContext();
  const [todo, setTodo] = useState({
    name: "",
    description: "",
    dueDate: "",
    priority: 4,
  });
  const dialogRef = useRef();

  const handleClose = () => {
    dialogRef.current.close();
  };

  const handleOpen = () => {
    dialogRef.current.showModal(); 
  };

  const handleSelectedPriority =(selectedPriority)=>{
    setTodo({...todo, priority: selectedPriority});
  }

  return (
    <div className="add-todo-container">
        <div className="add-todo-btn flex items-center" onClick={handleOpen}>
        <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#3584E4" className="add-todo-icon"><path d="M466-466H252v-28h214v-214h28v214h214v28H494v214h-28v-214Z"/></svg>
        <span className="add-todo-label">Add Todo</span>
        </div>
      <dialog ref={dialogRef} className="add-modal absolute top-1/3 left-1/2 transfrom -translate-x-1/2 -translate-y-1/2">
        <div className="modal-header flex justify-between items-center">
          <h3>Add Todo</h3>
            <Close className="close-button" onClick={handleClose}/>
        </div>
        <div className="modal-input flex flex-col gap-y-3">
          <div className="modal-label flex flex-col">
          <label>Name</label>
          <input
            type="text"
            value={todo.name}
            onChange={(e) => setTodo({ ...todo, name: e.target.value })}
          />
          </div>
          <div className="modal-label flex flex-col">
          <label>Description</label>
          <input
            type="text"
            value={todo.description}
            onChange={(e) => setTodo({ ...todo, description: e.target.value })}
          />
          </div>
        </div>
        <div className="modal-middle flex items-center gap-y-2">
            <DatePicker
              selected={new Date()}
              onChange={(date) => setTodo({ ...todo, dueDate: date })}
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
              className="select-dueDate"
              showYearDropdown
              scrollableMonthYearDropdown
            />
          <PriorityDropdown onSelectPriority={handleSelectedPriority} />
        </div>
        <div className="modal-footer flex ">
          <button
            className="footer-button Cancel-button"
            onClick={() => {
              handleClose();
              setTodo({
                name: "",
                description: "",
                dueDate: "",
                priority: 4,
              });
            }}
          >
            Cancel
          </button>
          <button
            className=" footer-button save-button"
            onClick={() => {
              addTodo(todo.name, todo.description, todo.dueDate, todo.priority);
              handleClose();
              setTodo({
                name: "",
                description: "",
                dueDate: "",
                priority: 4,
              });
            }}
          >
            Save
          </button>
        </div>
      </dialog>
    </div>
  );
};
