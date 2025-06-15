import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import { createBrowserRouter, useLocation } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import AboutPage from './pages/AboutPage.jsx';
import HomePage from './pages/HomePage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import CertificatesPage from './pages/CertificatesPage.jsx';
import TestimonialsPage from './pages/TestimonialsPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/about/read-more',
        element: <AboutPage />,
      },

      {
        path: '/projects/all',
        element: <ProjectsPage />,
      },
      {
        path: '/certificates/all',
        element: <CertificatesPage />,
      },
      {
        path: 'testimonials/all',
        element: <TestimonialsPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
