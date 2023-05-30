import React from 'react';
import { IMenuPropTypes } from './MenuPropTypes';
import { DrawerComponent } from 'components/atoms';
import { useSelector } from 'react-redux';
import { selectUserMenu } from 'appRedux/features/userMenu/userMenuSlice';
import { Box, List, ListItem, Text } from '@chakra-ui/react';
import { MenuIngredients, MenuCocktails } from '../components';
import { colors } from 'styles/theme';

const Menu: React.FC<IMenuPropTypes> = ({}) => {
  const { menu } = useSelector(selectUserMenu);

  return (
    <DrawerComponent>
      <Box width="20rem" p="2rem">
        <Text variant="h5" color={colors.text.primary}>
          Your Cocktail List:
        </Text>
        <List>
          {menu?.map((cocktail) => (
            <ListItem key={cocktail.id}>
              <Text variant="body2">{cocktail.name}</Text>
            </ListItem>
          ))}
        </List>
        <MenuCocktails />
        <MenuIngredients />
      </Box>
    </DrawerComponent>
  );
};

export default Menu;
