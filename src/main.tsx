import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SplashPage from './features/splash-page/pages/SplashPage.view';

const router = createBrowserRouter([
  {
    element: <SplashPage />,
    path: '/',
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
