import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {NextUIProvider} from '@nextui-org/react'
import ReactDOM from 'react-dom/client'
import React from 'react'


import NotFoundPage from './component/NotFoundPage/NotFoundPage.jsx'
import WaitList from './component/WaitList/WaitList.jsx'
import App from './App.jsx'
import './index.css'
import Contact from './component/Contact/Contact.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />
  },
  {
    path: "/waitlist",
    element: <WaitList />,
  },
  {
    path: "/contact",
    element: <Contact />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </React.StrictMode>,
)
