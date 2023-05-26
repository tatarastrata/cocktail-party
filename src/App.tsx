import { MainPage, FallbackUI } from './components/pages';
import './styles/index.scss';
import ErrorBoundary from './components/ErrorBoundary';

export const App: React.FC = () => {
  return (
    <ErrorBoundary fallbackUI={<FallbackUI />}>
      <MainPage />
    </ErrorBoundary>
  );
};

export default App;
