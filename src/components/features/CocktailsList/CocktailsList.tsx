import React, { useMemo } from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import { CocktailsListCard } from './components';
import { useSelector } from 'react-redux';
import { selectCocktails } from 'appRedux/features/cocktails';
import { useViewport } from 'hooks/useViewport';

const breakpoints: { [key: string]: number } = {
  isDesktop: 4,
  isTablet: 3,
  isWideMobile: 2,
  isMobile: 1,
};

const CocktailsList: React.FC = () => {
  const cocktails = useSelector(selectCocktails);
  const viewport = useViewport();

  const columns = useMemo(() => {
    for (const key in viewport) {
      if (!!viewport[key]) {
        return breakpoints[key];
      }
    }
  }, [viewport]);

  if (!cocktails?.length) return null;

  return (
    <SimpleGrid columns={columns} spacing={10}>
      {cocktails.map((cocktail) => (
        <CocktailsListCard key={cocktail.id} cocktail={cocktail} />
      ))}
    </SimpleGrid>
  );
};

export default CocktailsList;
