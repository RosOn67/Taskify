import { isSameDay } from 'date-fns';
import React, { useState, useEffect } from 'react';

import { useTodoContext } from '../context/todoContext';
import { useProjectsContext } from '../context/projectContext';
import { isDefaultProject } from '../utils/isdefault';

export const useTodos = () => {
  const { todos } = useTodoContext();
  const { currentProject } = useProjectsContext();
  const [todolist, setTodolist] = useState([]); // Tasks to display

  useEffect(() => {
    // If the current project is not a default project (user-created)
    if (currentProject && !isDefaultProject(currentProject)) {
      setTodolist(todos.filter((todo) => todo.projectId === currentProject));
    } 
    // If the current project is "INBOX"
    else if (currentProject === 'INBOX') {
      setTodolist(todos.filter((todo) => !todo.projectId || todo.projectId === 'INBOX')); // Includes unassigned tasks
    } 
    // If the current project is "TODAY"
    else if (currentProject === 'TODAY') {
      const today = new Date(); // Current date
      setTodolist(todos.filter((todo) => isSameDay(new Date(todo.dueDate), today)));
    } 
    // If no project is selected
    else {
      setTodolist([]);
    }
  }, [currentProject, todos]);

  return todolist;
};
