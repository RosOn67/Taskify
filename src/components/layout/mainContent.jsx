import React, { useState } from "react";
import { useProjectsContext } from "../../context/projectContext";
import { findProjectNameFromId } from "../../utils/isdefault";
import { TodoList } from "../todo/todoList";

export default function MainContent() {
    const { projects, currentProject } = useProjectsContext();
  
    console.log('projects:', projects);
    console.log('currentProject:', currentProject);
    const projectName = findProjectNameFromId(currentProject, projects);
    console.log('projectName:', projectName);
  
    return (
      <main className="main-content row-start-2 row-end-3 col-start-2 col-end-3   w-3/4 max-md:w-9/10 justify-self-center">
        {projectName && <h1 className="Project-Title">{projectName}</h1>}

        <TodoList />
      </main>
    );
  }