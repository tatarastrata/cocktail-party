import React from 'react';
import { IAlcoholTagPropTypes } from './AlcoholTagPropTypes';
import { Tag } from '@chakra-ui/react';

const AlcoholTag: React.FC<IAlcoholTagPropTypes> = ({ isWithAlcohol }) => {
  return (
    <Tag variant="subtle" colorScheme="gray" size="sm" w={'max-content'}>
      {isWithAlcohol ? 'Alcohol' : 'Alcohol-free'}
    </Tag>
  );
};

export default AlcoholTag;
