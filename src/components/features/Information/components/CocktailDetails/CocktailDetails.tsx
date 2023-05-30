import React, { useMemo } from 'react';
import { ICocktailDetailsPropTypes } from './CocktailDetailsPropTypes';
import { useDispatch, useSelector } from 'react-redux';
import { selectCocktailsDetails } from '../../../../../redux/features/detailsCocktail/detailsCocktailSlice';
import { Box, Button, List, ListItem, Text } from '@chakra-ui/react';
import { TAppDispatch } from '../../../../../redux/types';
import { ICocktail } from '../../../../../redux/features/cocktails/cocktailsTypes';
import {
  addCocktail,
  selectUserMenu,
} from '../../../../../redux/features/userMenu/userMenuSlice';

const CocktailDetails: React.FC<ICocktailDetailsPropTypes> = ({}) => {
  const { menu } = useSelector(selectUserMenu);
  const cocktailToDisplay = useSelector(selectCocktailsDetails);

  const dispatch: TAppDispatch = useDispatch();

  const handleAddCocktail = (cocktail: ICocktail) => {
    dispatch(addCocktail(cocktail));
  };

  const isDisabled: boolean = useMemo(
    () =>
      !!(
        cocktailToDisplay &&
        menu.find((menuItem) => menuItem.id === cocktailToDisplay.id)
      ),
    [cocktailToDisplay, menu]
  );

  if (!cocktailToDisplay) return null;

  return (
    <Box>
      <Text component="h3" variant="h3">
        {cocktailToDisplay.name}
      </Text>

      <img src={cocktailToDisplay.thumb} alt={cocktailToDisplay.name} />

      <List>
        {cocktailToDisplay.ingredients.map((ingredient) => (
          <ListItem key={ingredient}>
            <Text>{ingredient}</Text>
          </ListItem>
        ))}
      </List>

      <Text component="p">{cocktailToDisplay.instructions}</Text>

      <Button
        color="secondary"
        onClick={() => handleAddCocktail(cocktailToDisplay)}
        variant="outlined"
        size="small"
        disabled={isDisabled}
        sx={{
          color: '$secondaryColorMain',
        }}
      >
        {isDisabled ? 'Already there' : 'Add to menu'}
      </Button>
    </Box>
  );
};

export default CocktailDetails;
