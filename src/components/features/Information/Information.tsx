import React from 'react';
import { CocktailDetails } from 'components/features/Information/components';
import { GoBackButton } from 'components/atoms';
import { VStack } from '@chakra-ui/react';

const Information: React.FC = () => {
  return (
    <section>
      <VStack spacing={2} align="start">
        <CocktailDetails />
        <GoBackButton />
      </VStack>
    </section>
  );
};

export default Information;
