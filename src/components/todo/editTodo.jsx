
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
import { PriorityDropdown } from "./priorityDrop";
import { useTodoContext } from "../../context/todoContext";

export const TodoEditor = (props) => {
  const { updateTodos } = useTodoContext();
  const { todo, setUpdatedTodo, updatedTodo,isediting,setIsEditing } = props;
  
  const [selectedDate, updateSelectedDate] = useState(todo.dueDate);

  const handleSelectedPriority =(selectedPriority)=>{
    setUpdatedTodo(prev=>({...prev, priority: selectedPriority}));
  }

  return (
    <div className={`inline-editor w-ful ${
      isediting ? "open-modal" : "hidden-modal"
    }`}>
      <div className="input-group">
          <input
            type="text"
            value={updatedTodo.name}
            onChange={(e) => setUpdatedTodo(prev=>({ ...prev, name: e.target.value }))}
            className="w-full edit-name"
          />
          <input
            type="text"
            value={updatedTodo.description}
            onChange={(e) =>
              setUpdatedTodo(prev=>({ ...prev, description: e.target.value }))
            }
            className="edit-description w-full"
          />
      </div>
      <div className="todo-edit-middle flex items-center">
          <DatePicker
            selected={selectedDate}
            onChange={(date) => {
              updateSelectedDate(date);
              setUpdatedTodo(prev=>({ ...prev, dueDate: date }));
            }}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
            showYearDropdown
            scrollableMonthYearDropdown
            className="select-dueDate"
          />
        <PriorityDropdown onSelectPriority={handleSelectedPriority} />
      </div>
      <div className="todo-edit-footer flex items-center justify-end">
      <button
          className="cancel-button footer-button"
          onClick={() => setIsEditing(!isediting)}
        >
          Cancel
        </button>
        <button
          className="save-button footer-button"
          onClick={() => {
            updateTodos(updatedTodo);
            setIsEditing(!isediting);
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};
