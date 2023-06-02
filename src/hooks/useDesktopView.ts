import { useMediaQuery } from '@chakra-ui/react';

export function useDesktopView() {
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)');
  return isLargerThan800;
}
