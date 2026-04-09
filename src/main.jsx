import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Router } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import RootLayout from './Layout/RootLayout';
import HomePage from './pages/HomePage/HomePage';
import AppPage from './pages/AppPage/AppPage';
import InstalledApps from './pages/InstalledApps/InstalledApps';
import AppsDetails from './pages/AppsDetails/AppsDetails';
import InstallAppsProvider from './context/InstallAppsProvider';
import Error from './components/Error/Error';
import { ToastContainer } from 'react-toastify';

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomePage
      },
      {
        path: "/app",
        loader: () => fetch('/data.json'),
        Component: AppPage
      },
      {
        path: "/app/:id",
        loader: () => fetch('/data.json'),
        Component: AppsDetails
      },
      {
        path: "/installation",
        Component: InstalledApps
      }
    ],
    errorElement: <Error></Error>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InstallAppsProvider>
      <RouterProvider router={router} />
    </InstallAppsProvider>
    <ToastContainer />
  </StrictMode>,
)
