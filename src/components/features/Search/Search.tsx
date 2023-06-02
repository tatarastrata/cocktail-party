import React from 'react';
import { SearchCocktailInput } from './components';
import { VStack } from '@chakra-ui/react';

const Search: React.FC = ({}) => {
  return (
    <section>
      <VStack>
        <SearchCocktailInput />
        {/* <SearchFilters /> */}
      </VStack>
    </section>
  );
};

export default Search;
