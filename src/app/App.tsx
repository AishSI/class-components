import './App.css';
import { ErrorBoundary } from '@/features/error-boundary';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';

export const App = (): React.ReactNode => {
  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
};
