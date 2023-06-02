import React from 'react';
import { ICocktailsListCardPropTypes } from './CocktailsListCardPropTypes';
import {
  Card,
  CardBody,
  CardHeader,
  VStack,
  Image,
  CardFooter,
  ButtonGroup,
  Text,
} from '@chakra-ui/react';
import {
  AddCocktailToMenu,
  AssociatedTags,
  LearnMoreButton,
} from 'components/atoms';
import { accumulateCocktailTags } from 'utils';

const CocktailsListCard: React.FC<ICocktailsListCardPropTypes> = ({
  cocktail,
}) => {
  return (
    <Card size="sm" key={cocktail.id}>
      <CardHeader color={'pink'}>{cocktail.name}</CardHeader>
      <CardBody>
        <VStack alignItems={'flex-start'}>
          <Image
            width={'100%'}
            fit="cover"
            src={cocktail.thumb}
            alt={cocktail.name}
          />
          <AssociatedTags list={accumulateCocktailTags(cocktail)} />

          {cocktail.ingredients.map((ingredient) => (
            <Text m={'0'} key={ingredient}>
              {ingredient}
            </Text>
          ))}
        </VStack>
      </CardBody>
      <CardFooter>
        <ButtonGroup spacing="2" alignItems={'baseline'}>
          <LearnMoreButton cocktail={cocktail} />
          <AddCocktailToMenu cocktail={cocktail} />
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default CocktailsListCard;
