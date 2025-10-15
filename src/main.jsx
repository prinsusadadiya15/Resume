import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contact from './Contact';
import Project from './Project';
import About from './About';
import Resume from './Resume';




let allpages = createBrowserRouter([

  {
    path: "/",
    element: <About />
  },
  {
    path: "resume",
    element: <Resume />
  },

  {
    path: "project",
    element: <Project />
  },

  {
    path: "contact",
    element: <Contact />
  }
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={allpages} />
  </StrictMode>,
)
