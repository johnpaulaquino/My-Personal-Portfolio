import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import AboutPage from './page/AboutPage.jsx';
import HomePage from './page/HomePage.jsx';
import ProjectsPage from './page/ProjectsPage.jsx';
import CertificatesPage from './page/CertificatesPage.jsx';
import TestimonialsPage from './page/TestimonialsPage.jsx';

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
