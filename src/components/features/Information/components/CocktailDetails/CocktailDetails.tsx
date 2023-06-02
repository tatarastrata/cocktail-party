import React from 'react';
import { ICocktailDetailsPropTypes } from './CocktailDetailsPropTypes';
import { useSelector } from 'react-redux';
import { selectCocktailsDetails } from 'appRedux/features/detailsCocktail/detailsCocktailSlice';
import { Box, HStack, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { AddCocktailToMenu, CategoryTag } from 'components/atoms';
import IngredientsAndMeasures from '../IngredientsAndMeasures';

const CocktailDetails: React.FC<ICocktailDetailsPropTypes> = ({}) => {
  const cocktailToDisplay = useSelector(selectCocktailsDetails);

  if (!cocktailToDisplay) return null;

  return (
    <Stack w={'100%'} spacing={2}>
      <Heading variant="h3" mb={2}>
        {cocktailToDisplay.name}
      </Heading>
      <Image
        boxSize="400px"
        objectFit="cover"
        src={cocktailToDisplay.thumb}
        alt={cocktailToDisplay.name}
      />
      <HStack>
        {cocktailToDisplay.isAlcoholic || <CategoryTag category={'Mocktail'} />}
        <CategoryTag category={cocktailToDisplay.category} />
        {cocktailToDisplay.tags.map((tag) => (
          <CategoryTag key={tag} category={tag} />
        ))}
      </HStack>
      <Box>
        <Heading variant="h4">Ingredients:</Heading>
        <IngredientsAndMeasures />
      </Box>
      <Text>{cocktailToDisplay.instructions}</Text>
      <AddCocktailToMenu cocktail={cocktailToDisplay} />
    </Stack>
  );
};

export default CocktailDetails;
