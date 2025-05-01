import Navbar from "./components/layout/navbar";
import Sidebar from "./components/layout/sidebar";
import { ProjectProvider } from "./context/projectContext";
import { TodoProvider } from "./context/todoContext";
import  MainContent from "./components/layout/mainContent"
import { StrictMode } from "react";

export default function App() {
  return (
    <StrictMode>
    <ProjectProvider>
      <TodoProvider>
      <div className="min-h-screen w-screen grid grid-rows-[60px_1fr] grid-cols-[255px_1fr]">
        <Navbar />
        <Sidebar />
        <MainContent />
      </div>
      </TodoProvider>
    </ProjectProvider>
    </StrictMode>
  );
}
