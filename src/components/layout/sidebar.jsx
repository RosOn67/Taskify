import { Projects } from "../projects/projects";
import { AddProject } from "../projects/addprojects";
import { useProjectsContext } from "../../context/projectContext";
import { defaultProjects } from "../../constants/constant";

//handle on click for the default projects inbox and today
export default function Sidebar() {
  const { setCurrentProject} = useProjectsContext();
  return (
    <div className="sidebar row-start-1 row-end-3 col-start-1 col-end-2 h-screen w-full">
      <div>
        <div className="logo-container flex items-center">
          <div className="logo">
            <svg
              fill="#3584e4"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-1"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <title>Todoist icon</title>
                <path d="M21 0H3C1.35 0 0 1.35 0 3v3.858s3.854 2.24 4.098 2.38c.31.18.694.177 1.004 0 .26-.147 8.02-4.608 8.136-4.675.279-.161.58-.107.748-.01.164.097.606.348.84.48.232.134.221.502.013.622l-9.712 5.59c-.346.2-.69.204-1.048.002C3.478 10.907.998 9.463 0 8.882v2.02l4.098 2.38c.31.18.694.177 1.004 0 .26-.147 8.02-4.609 8.136-4.676.279-.16.58-.106.748-.008.164.096.606.347.84.48.232.133.221.5.013.62-.208.121-9.288 5.346-9.712 5.59-.346.2-.69.205-1.048.002C3.478 14.951.998 13.506 0 12.926v2.02l4.098 2.38c.31.18.694.177 1.004 0 .26-.147 8.02-4.609 8.136-4.676.279-.16.58-.106.748-.009.164.097.606.348.84.48.232.133.221.502.013.622l-9.712 5.59c-.346.199-.69.204-1.048.001C3.478 18.994.998 17.55 0 16.97V21c0 1.65 1.35 3 3 3h18c1.65 0 3-1.35 3-3V3c0-1.65-1.35-3-3-3z"></path>
              </g>
            </svg>
          </div>
          <span className="logo-name font-medium ">Taskify</span>
        </div>
      </div>
      <div className="Sidebar-Menu ">
        <ul className="list-none default">
          <li
            className="menu-item flex items-center"
            onClick={() => setCurrentProject(defaultProjects[0].id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#555454"
            >
              <path d="M232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm0-28h496q14 0 23-9t9-23v-108H610q-20 38-54.5 59T480-260q-41 0-75.5-21T350-340H200v108q0 14 9 23t23 9Zm248-88q38 0 69-22t43-58h168v-360q0-14-9-23t-23-9H232q-14 0-23 9t-9 23v360h168q12 36 43 58t69 22Zm-248 88h-32 560-528Z" />
            </svg>
            <span className="item-name" role="button">
              Inbox
            </span>
          </li>
          <li
            className="menu-item flex items-center"
            onClick={() => setCurrentProject(defaultProjects[1].id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#555454"
            >
              <path d="M360-346q-33 0-56.5-23.5T280-426q0-33 23.5-56.5T360-506q33 0 56.5 23.5T440-426q0 33-23.5 56.5T360-346ZM232-132q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h80v-92h32v92h276v-92h28v92h80q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm0-28h496q12 0 22-10t10-22v-336H200v336q0 12 10 22t22 10Zm-32-396h560v-132q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v132Zm0 0v-164 164Z" />
            </svg>
            <span className="item-name">Today </span>
          </li>
        </ul>
        <div className="project-label flex justify-between items">
          <span>Projects</span>
          <div className="label-side flex items-center">
            <AddProject />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              viewBox="0 -960 960 960"
              width="30px"
              fill="#555454"
              className="stroke-2"
            >
              <path d="M480-380 276-584l20-20 184 184 184-184 20 20-204 204Z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="Project-list-container list-none flex-col">
        <Projects />
      </div>
    </div>
  );
}
