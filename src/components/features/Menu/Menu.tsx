import React from 'react';
import { DrawerComponent } from 'components/atoms';
import { useDispatch, useSelector } from 'react-redux';
import {
  closeMenu,
  selectUserMenu,
} from 'appRedux/features/userMenu/userMenuSlice';
import { MenuFooter, MenuBlock } from './components';
import { VStack } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import { selectCocktails } from 'appRedux/features/cocktails';
import { ELayout, setLayout } from 'appRedux/features/view';
import { showDetails } from 'appRedux/features/detailsCocktail';

type TOp = Array<{
  id: string;
  name: string;
}>;

const Menu: React.FC = ({}) => {
  const { menu } = useSelector(selectUserMenu);
  const cocktails = useSelector(selectCocktails);
  const dispatch = useDispatch();

  const ingredients = menu.reduce((acc: TOp, item) => {
    const ingredientObjects = item.ingredients.map((ingredient) => ({
      name: ingredient,
      id: uuidv4(),
    }));
    acc = [...acc, ...ingredientObjects];
    return acc;
  }, []);

  const handleShowCocktail = (id: string) => {
    dispatch(closeMenu());
    const selected = [...cocktails, ...menu].find((item) => item.id === id);
    if (!selected) return;

    dispatch(setLayout(ELayout.SINGLE));
    dispatch(showDetails(selected));
  };

  return (
    <DrawerComponent title="Menu:" footer={<MenuFooter />}>
      <VStack align={'start'}>
        <MenuBlock
          heading="Your Cocktail List:"
          list={menu.map((item) => ({ name: item.name, id: item.id }))}
          handleClick={handleShowCocktail}
        />
        <MenuBlock heading="Ingredients:" list={ingredients} />
      </VStack>
    </DrawerComponent>
  );
};

export default Menu;
