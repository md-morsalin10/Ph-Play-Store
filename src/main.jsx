import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Router } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import RootLayout from './Layout/RootLayout';
import HomePage from './pages/HomePage/HomePage';
import AppPage from './pages/AppPage/AppPage';
import InstalledApps from './pages/InstalledApps/InstalledApps';

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children:[
      {
        index: true,
        Component: HomePage
      },
      {
        path:"/app",
        Component: AppPage
      },
      {
        path: "/installation",
        Component: InstalledApps
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
