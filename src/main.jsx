import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './Routes/router.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './Providers/AuthProvider'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    <ToastContainer />
  </React.StrictMode>,
)
