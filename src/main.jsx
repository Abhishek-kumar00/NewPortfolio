import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { Route, RouterProvider} from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Resume from './components/Resume/Resume.jsx'
import Projects from './components/Projects/Projects.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[{
      path:'/',
      element:<Home/>
    },{
      path:'/about',
      element:<About/>
    },{
      path:'/contact',
      element:<Contact/>
    },{
      path:'/projects',
      element:<Projects/>

    },{
      path:'/resume',
      element:<Resume/>
    }]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

