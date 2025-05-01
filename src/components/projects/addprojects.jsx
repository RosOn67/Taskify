//add projects component
import { useState, useRef } from "react";
import { useProjectsContext } from "../../context/projectContext";

export const AddProject = () => {
  const { addProjects} = useProjectsContext();
  const [projectName, setProjectName] = useState("");

  const projectModalRef = useRef();

  const handleClose = () => {
    projectModalRef.current.close();
  };

  const handleOpen = () => {
    projectModalRef.current.showModal();
  };

  const handleAddProject = (projectName) => {
    const name = projectName.trim(); //clear spaces i think
    addProjects(name);
    setProjectName(""); //clear input
  };
  return (
    <div className="add-project-container">
      <div className="add-project-icon-box" onClick={handleOpen}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30px"
          viewBox="0 -960 960 960"
          width="30px"
          fill="#000000"
          className="stroke-1"
        >
          <path d="M466-466H252v-28h214v-214h28v214h214v28H494v214h-28v-214Z" />
        </svg>
      </div>
      <dialog ref={projectModalRef} className="add-modal absolute top-1/3 left-1/2 transfrom -translate-x-1/2 -translate-y-1/2">
        <h3 className="modal-header">Add Project</h3>
        <div className="modal-input flex flex-col">
          <label>Name</label>
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
        </div>
        <div className="modal-footer flex ">
          <button
            className="footer-button Cancel-button"
            onClick={() => {
              handleClose();
              setProjectName("");
            }}
          >
            Cancel
          </button>
          <button
            className="footer-button save-button"
            onClick={() => {
              handleAddProject(projectName);
              handleClose();
              setProjectName(""); //clear input
            }}
          >
            Add
          </button>
        </div>
      </dialog>
    </div>
  );
};
