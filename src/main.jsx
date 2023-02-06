import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

import Home from './routes/Home';
import Projects from './routes/Projects';
import About from './routes/About';
import Contact from './routes/Contact';

import { 
  createBrowserRouter,
  RouterProvider, 
} from "react-router-dom"
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "projects",
    element: <Projects/>,
  },
  {
    path: "about",
    element: <About/>,
  },
  {
    path: "contact",
    element: <Contact/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
