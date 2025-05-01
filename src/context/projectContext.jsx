import {v4 as uuidv4} from 'uuid';
import  { useState, createContext, useContext,  useEffect } from "react";
import { useProjectLocalStorage } from "../hooks/localStorage";
import { defaultProjects } from '../constants/constant';
const ProjectsContext = createContext();

export function ProjectProvider({ children }) {
  const [projects, setprojects] = useProjectLocalStorage("projects", []); 
  //i will make inbox as a default project
  const [currentProject, setCurrentProject] = useState(defaultProjects[0].id); //defaults to inbox ->will be id of a current project

  //add projects
  const addProjects = (name) => {
    const newProject = {
      id: uuidv4(),
      name: name
    };
    console.log(newProject);
    console.log(projects); //log existing projects
    setprojects(p => [...p, newProject]);
    setCurrentProject(newProject.id);
  };

  //delete a project
  const deleteProject = (projectId) => {
    //reset current project if deleted one was currenlty selected
    console.log("Before deleting:",projectId, currentProject, defaultProjects[0].id); 
    console.log(defaultProjects);
    setprojects((p)=>p.filter((project) => project.id !== projectId));
    if (currentProject === projectId) {
      setCurrentProject(defaultProjects[0].id);
    }
  };

  return (
    <ProjectsContext.Provider
      value={{
        projects,
        setprojects,
        currentProject,
        setCurrentProject,
        addProjects,
        deleteProject
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
}

//create a custom hook for the context
export const useProjectsContext =() => useContext(ProjectsContext);


//inbox will be as a default project in my app