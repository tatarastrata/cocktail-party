import { useMediaQuery } from '@chakra-ui/react';

export function useViewport(): {
  [key: string]: boolean;
  isDesktop: boolean;
  isTablet: boolean;
  isWideMobile: boolean;
  isMobile: boolean;
} {
  const [
    larger1200,
    smaller1200,
    larger680,
    smaller680,
    larger480,
    smaller480,
  ] = useMediaQuery([
    '(min-width: 1200px)',
    '(max-width: 1200px)',
    '(min-width: 680px)',
    '(max-width: 680px)',
    '(min-width: 480px)',
    '(max-width: 480px)',
  ]);

  return {
    isDesktop: larger1200,
    isTablet: smaller1200 && larger680,
    isWideMobile: smaller680 && larger480,
    isMobile: smaller480,
  };
}
