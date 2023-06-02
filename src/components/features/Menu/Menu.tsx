import React from 'react';
import { DrawerComponent } from 'components/atoms';
import { useSelector } from 'react-redux';
import { selectUserMenu } from 'appRedux/features/userMenu/userMenuSlice';
import { Box, Heading, List, ListItem, Text } from '@chakra-ui/react';
import { MenuIngredients, MenuCocktails } from './components';

const Menu: React.FC = ({}) => {
  const { menu } = useSelector(selectUserMenu);

  return (
    <DrawerComponent>
      <Box width="20rem" p="2rem">
        <Heading variant="h5">Your Cocktail List:</Heading>
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
