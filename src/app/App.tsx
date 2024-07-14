import './App.css';
import { Main } from '@/pages';
import { ErrorBoundary } from '@/features/error-boundary';

export const App = (): React.ReactNode => {
  return (
    <ErrorBoundary>
      <Main />
    </ErrorBoundary>
  );
};
