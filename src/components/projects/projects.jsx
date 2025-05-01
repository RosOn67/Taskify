import React, { useState } from "react";

import { useProjectsContext } from "../../context/projectContext";
import { IndividualProject } from "./individualProject";

export const Projects = ({ activevalue = null }) => {
  const [active, setactive] = useState(activevalue); //to maintan active project
  const { projects, setCurrentProject } = useProjectsContext();

  const handleClick = (projectId) => {
    setactive(projectId);
    setCurrentProject(projectId);
  };

  return (
    projects &&
    projects.map((project) => (
      <li
        key={project.id}
        className={
          active === project.id ? "active-project" : "non-active-project"
        }
        onClick={() => handleClick(project.id)}
      >
        <IndividualProject project={project} />
      </li>
    ))
  );
};
