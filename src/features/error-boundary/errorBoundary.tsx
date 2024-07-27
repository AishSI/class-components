import { EmptyArea } from '@/app/layout/empty-area';
import { useRouteError } from 'react-router-dom';

export function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);
  return <EmptyArea />;
}
