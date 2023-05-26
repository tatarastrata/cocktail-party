import { render } from '@testing-library/react';
import ErrorBoundary from '../ErrorBoundary';

test('ErrorBoundary renders fallback UI when an error occurs', () => {
  const FailingComponent = () => {
    throw new Error('Test error');
  };

  const { getByText } = render(
    <ErrorBoundary fallbackUI={<div>Error occurred</div>}>
      <FailingComponent />
    </ErrorBoundary>
  );

  const fallbackUIElement = getByText('Error occurred');
  expect(fallbackUIElement).toBeInTheDocument();
});
