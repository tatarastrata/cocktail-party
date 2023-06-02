import React from 'react';
import { ICategoryTagPropTypes } from './CategoryTagPropTypes';
import { Tag } from '@chakra-ui/react';

const CategoryTag: React.FC<ICategoryTagPropTypes> = ({ category }) => {
  return (
    <Tag variant="subtle" colorScheme="purple" size="sm" w={'max-content'}>
      {category}
    </Tag>
  );
};

export default CategoryTag;
