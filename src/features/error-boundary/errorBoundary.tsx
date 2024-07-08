import { EmptyArea } from '@/app/layout/empty-area';
import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Button press error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <EmptyArea />;
    }

    return this.props.children;
  }
}
