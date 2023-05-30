import React from 'react';
import { ISearchFiltersPropTypes } from './SearchFiltersPropTypes';
import { useSelector } from 'react-redux';
import { selectModifiers } from 'appRedux/features/modifiers';
import { Box, Text } from '@chakra-ui/react';

const SearchFilters: React.FC<ISearchFiltersPropTypes> = ({}) => {
  const { categories } = useSelector(selectModifiers);

  return (
    <Box>
      {categories.map((category: string) => (
        <Text key={category}>{category}</Text>
      ))}
    </Box>
  );
};

export default SearchFilters;
