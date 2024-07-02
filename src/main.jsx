import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Home from '../routes/Home.jsx'
import Rover from '../routes/Rover.jsx'
import Search from '../routes/Search.jsx'
import APD from '../routes/APD.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/apd",
        element: <APD />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/rover",
        element: <Rover />
      }
    ],
  },
])

import { MenuProvider } from '../context/MenuContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MenuProvider>
      <RouterProvider router={router} />
    </MenuProvider>
  </React.StrictMode>
)
