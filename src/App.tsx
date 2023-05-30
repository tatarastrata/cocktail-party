import { MainPage, FallbackUI } from './components/pages';
import './styles/index.scss';
import ErrorBoundary from './components/pages/ErrorBoundary';
import store from './redux/store';
import { Header } from './components/features/Header';
import { Footer } from './components/features/Footer';
import { ChakraProvider } from '@chakra-ui/react';

export const App: React.FC = () => {
  console.log(store.getState());

  return (
    <ChakraProvider>
      <ErrorBoundary fallbackUI={<FallbackUI />}>
        <Header />
        <MainPage />
        <Footer />
      </ErrorBoundary>
    </ChakraProvider>
  );
};

export default App;
