import { MainPage, FallbackUI } from 'components/pages';
import ErrorBoundary from 'components/pages/ErrorBoundary';
import { Header } from 'components/features/Header';
// import { Footer } from 'components/features/Footer';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { theme } from './styles';

export const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript />
      <ErrorBoundary fallbackUI={<FallbackUI />}>
        <Header />
        <MainPage />
        {/* <Footer /> */}
      </ErrorBoundary>
    </ChakraProvider>
  );
};

export default App;
