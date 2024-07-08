import { Component } from 'react';
import './App.css';
import { Main } from '@/pages';
import { ErrorBoundary } from '@/features/error-boundary';

export class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <Main />;
      </ErrorBoundary>
    );
  }
}
