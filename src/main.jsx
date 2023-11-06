import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//react-router-dom imports
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AboutComponent from '.components/User.jsx'
import User from './components/User.jsx'

//Create browser router will be used to define the various paths in our application
const routes = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/about',
    element: <AboutComponent/>
  },
  {
    //dynamic route
    path: '/users/:id',
    element: <User/>
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {routes} />
  </React.StrictMode>,
)
