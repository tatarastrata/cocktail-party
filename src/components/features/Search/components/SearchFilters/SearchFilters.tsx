import React from 'react';
import { ISearchFiltersPropTypes } from './SearchFiltersPropTypes';
import { useSelector } from 'react-redux';
import { EModifiers, selectModifiers } from 'appRedux/features/modifiers';
import { FilterAccordion } from 'components/atoms';
import { HStack } from '@chakra-ui/react';

const SearchFilters: React.FC<ISearchFiltersPropTypes> = ({}) => {
  const { categories, ingredients } = useSelector(selectModifiers);

  return (
    <HStack alignItems={'flex-start'}>
      <FilterAccordion
        filterName={EModifiers.CATEGORY}
        filterOptions={categories}
      />
      <FilterAccordion
        filterName={EModifiers.INGREDIENT}
        filterOptions={ingredients}
      />
    </HStack>
  );
};

export default SearchFilters;
