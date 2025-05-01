
import { createRoot } from 'react-dom/client';
import App from "./app.jsx"
import './main.css'

const appContainer  =  createRoot(document.getElementById('root'));

appContainer.render(<App />);