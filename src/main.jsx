import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { DbContextProvider } from './contexts/DbContext'
import './index.css'
import { router } from './router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DbContextProvider>
      <RouterProvider router={router} />
    </DbContextProvider>
  </React.StrictMode>
);
