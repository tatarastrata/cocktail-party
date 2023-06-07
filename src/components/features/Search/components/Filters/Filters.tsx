import React from 'react';
import { HStack } from '@chakra-ui/react';
import {
  CategoriesFilter,
  IngredientsFilter,
} from 'components/features/Search/components';

const Filters: React.FC = () => {
  return (
    <HStack spacing={2} alignItems={'flex-start'}>
      <CategoriesFilter />
      <IngredientsFilter />
    </HStack>
  );
};

export default Filters;
