import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import { ICocktailsListPropTypes } from './CocktailsListPropTypes';
import { CocktailsListCard } from './components';

const CocktailsList: React.FC<ICocktailsListPropTypes> = ({ list }) => {
  if (!list?.length) return null;

  return (
    <SimpleGrid columns={2} spacing={10}>
      {list.map((cocktail) => (
        <CocktailsListCard key={cocktail.id} cocktail={cocktail} />
      ))}
    </SimpleGrid>
  );
};

export default CocktailsList;
