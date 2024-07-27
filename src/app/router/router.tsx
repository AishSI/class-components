import { Main } from '@/pages';
import { NotFound } from '@/pages/not-found';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { ErrorBoundary } from '@/features';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: '/not-found',
    element: <NotFound />,
  },
  {
    path: '*',
    element: <Navigate to="/not-found" />,
  },
]);
