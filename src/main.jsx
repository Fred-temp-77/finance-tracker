import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import './index.css'
import Dashboard from './Pages/Dashboard.jsx'
import App from './App.jsx'

const NotFound = () => <h1>Page Not Found</h1>

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: '/home',
    element: <Dashboard />,
  }
])

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )