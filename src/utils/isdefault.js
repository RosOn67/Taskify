// helper to check if a project belongs to default or not 
import { defaultProjects } from "../constants/constant";

  export const isDefaultProject = (projectId) => {
    return defaultProjects.find((project) => project.id === projectId);
  };

  export const findProjectNameFromId = (projectId, projectsArr)=>{
    const foundProject = [...projectsArr, {name:"Inbox", id:"INBOX"}, {name:"Today", id:"TODAY"}].find(project=>project.id==projectId);
    if(foundProject){
      console.log(foundProject);
      return foundProject.name;
    }
    return "";
  }

  //for sorting the todos

  //sort by date 
  
  //sort by priority 


  //filter todos

  //filter by date 

  //filter by priority