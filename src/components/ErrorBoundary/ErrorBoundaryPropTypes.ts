export interface IErrorBoundaryProps {
  children: React.ReactNode;
  fallbackUI?: React.ReactNode;
}

export interface IErrorBoundaryState {
  hasError: boolean;
}
