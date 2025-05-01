import React, {useState} from 'react';
import { useProjectsContext } from '../../context/projectContext';
export const IndividualProject = ({project})=>{
    const {deleteProject} = useProjectsContext();

    return (
        <div className="project flex justify-between menu-item items-center">
            <span className="group-1 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#555454"><path d="m323-240 30-120H223l5-20h130l44-176H260l5-20h142l36-144h18l-36 144h158l36-144h18l-36 144h136l-5 20H596l-44 176h148l-5 20H547l-30 120h-18l30-120H371l-30 120h-18Zm53-140h158l44-176H420l-44 176Z"/></svg>
            <span className="project-name">{project.name}</span>
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#555454" onClick={(e)=>{
                 e.stopPropagation();
                 deleteProject(project.id);}}><path d="M312-172q-25 0-42.5-17.5T252-232v-488h-40v-28h148v-28h240v28h148v28h-40v488q0 26-17 43t-43 17H312Zm368-548H280v488q0 14 9 23t23 9h336q12 0 22-10t10-22v-488ZM402-280h28v-360h-28v360Zm128 0h28v-360h-28v360ZM280-720v520-520Z"/></svg>
        </div>
    )
}

//i can add confirmation for delete in the future 

//i will fix deleteing current project not ssetting to default later